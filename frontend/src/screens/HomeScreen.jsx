import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import PropTypes from 'prop-types';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ keyword, pageNumber });
  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-primary mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message}</Message>
      ) : (
        <>
          <Meta
            title='Fashion Shop'
            description='Fashion Shop home page with several dress,jeans and shirts products'
          />
          <h1>Latest Products</h1>
          <Row className='justify-content-center'>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  );
};
HomeScreen.propTypes = {
  keyword: PropTypes.string,
  pageNumber: PropTypes.string,
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
};
export default HomeScreen;
