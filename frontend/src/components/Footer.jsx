import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Tech Shop &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  currentYear: PropTypes.object,
};
export default Footer;
