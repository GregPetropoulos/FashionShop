import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; //FOR NEXTJS use href
import Rating from './Rating';
import sampleImage from '../assets/images/sample.jpg';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded' data-testid='Product.ProductCard'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image?.secure_url || sampleImage} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className='text-decoration-none text-secondary'>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string,
    _v: PropTypes.number,
    brand: PropTypes.string,
    category: PropTypes.string,
    countInStock: PropTypes.number,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    name: PropTypes.string,
    numReviews: PropTypes.number,
    price: PropTypes.number,
    qty: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.array,
    updatedAt: PropTypes.string,
    user: PropTypes.string,
  }),
};
export default Product;
