import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
// import { cloudinaryUploadImage } from '../utils/cloudinary.js';
import cloudinary from '../utils/cloudinary.js';

// @desc    Fetch all products/paginate
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  // PAGINATION
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  // SEARCH
  const keyword = req.query.keyword ? { name: { $regex: req.query.keyword, $options: 'i' } } : {};

  //Mongoose method  to get total number of products
  const count = await Product.countDocuments({ ...keyword }); //if  no keyword its empty {}

  const products = await Product.find({ ...keyword }) //if  no keyword its empty {}
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  if (products) {
    return res.json({ products, page, pages: Math.ceil(count / pageSize) });
  }
  res.status(404);
  throw new Error('Resource not found');
});

// @desc    Fetch a product by MongoDB ObjectId
// @route   GET /api/product/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error('Resource not found');
});

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json(products);
});
//* ADMIN
// *======================
// *======================
// @desc    Create a product
// @route   POST /api/products
// @access  PRIVATE/ADMIN
const createProducts = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: { secure_url: '' },
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description lorem  lorem',
  });
  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

// @desc    Update product
// @route   PUT /api/products/:id
// @access  PRIVATE/ADMIN
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    try {
      if (image.length > 0) {
        const cloudinaryResult = await cloudinary.uploader.upload(image, {
          folder: 'fashionShopProductImages',
          resource_type: 'auto',
          resource_type: 'image',
          allowed_formats: ['jpg', 'png', 'webp', 'svg'],
          overwrite: true,
        });

        if (cloudinaryResult) {
          const { secure_url } = cloudinaryResult;
          product.name = name;
          product.price = price;
          product.description = description;
          product.image = { secure_url };
          product.brand = brand;
          product.category = category;
          product.countInStock = countInStock;
          const updatedProduct = await product.save();
          res.status(200).json(updatedProduct);
        } else {
          res.status(404);
          throw new Error('Cloud Resource not found');
        }
      } else {
        product.name = name;
        product.price = price;
        product.description = description;
        product.image = { secure_url: '' };
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
      }
    } catch (err) {
      console.error(`Status: ${err.status}, Error:${err}`);
    }
  } else {
    throw new Error('No Product');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  PRIVATE/ADMIN
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    if (product.image.public_id) {
      await cloudinary.uploader.destroy(product.image.public_id);
    }
    // Mongoose method deleteOne
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: 'Product Deleted' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc    Create a new review
// @route   POST /api/products/:id/reviews
// @access  PRIVATE
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    //Dedupe if user making a second review on the same product
    const alreadyReviews = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );
    if (alreadyReviews) {
      res.status(400);
      throw new Error('Product already reviewed');
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;

    //Get new rating
    product.rating =
      product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;
    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export {
  getProductById,
  getProducts,
  createProducts,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
};
