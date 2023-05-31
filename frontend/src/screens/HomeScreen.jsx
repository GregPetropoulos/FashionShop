import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
const products = [
  {
    name: 'test1',
    _id: 1,
    title: 'TEST1PRODUCTTITLE',
    price: 20,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2899&q=80'
  },
  {
    name: 'test2',
    _id: 2,
    title: 'TEST2PRODUCTTITLE',
    price: 30,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2899&q=80'
  },
  {
    name: 'test3',
    _id: 3,
    title: 'TEST3PRODUCTTITLE',
    price: 40,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2899&q=80'
  }
];
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
