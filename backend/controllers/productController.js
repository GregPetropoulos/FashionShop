import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (products) {
    return res.json(products);
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
    image: '/images/sample.jpg',
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
  console.log(req.params._id)

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    const updatedProduct = await product.save();
    res.json(updatedProduct)
  }else{
    res.status(404);
    throw new Error('Resource not found')
  }
});

export { getProductById, getProducts, createProducts,updateProduct };
