import React from 'react';
import Rating from '../components/Rating';
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
const products = [
  {
    name: 'test1',
    _id: 1,
    title: 'TEST1PRODUCTTITLE',
    price: 20,
    rating: 2,
    numOfReviews: 12,
    countInStock: 8,
    description: 'loremloremlorem lorem loremlorem lorem',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2899&q=80'
  },
  {
    name: 'test2',
    _id: 2,
    title: 'TEST2PRODUCTTITLE',
    price: 30,
    rating: 5,
    numOfReviews: 100,
    countInStock: 10,
    description: 'loremloremlorem lorem loremlorem lorem',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2899&q=80'
  },
  {
    name: 'test3',
    _id: 3,
    title: 'TEST3PRODUCTTITLE',
    price: 40,
    rating: 3.5,
    numOfReviews: 27,
    countInStock: 0,
    description: 'loremloremlorem lorem loremlorem lorem',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2899&q=80'
  }
];

const ProductScreen = () => {
  const { id: productId } = useParams();

  const product = products.find((p) => p._id.toString() === productId);
  console.log(product);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numOfReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
