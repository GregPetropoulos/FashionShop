import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { ReactComponent as DressShopLogo } from '../assets/shop-logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';
import SearchBox from './SearchBox';
import PropTypes from 'prop-types';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap(); //a function call to the useLogoutMutation
      dispatch(logout()); //clearing local storage

      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <DressShopLogo className={'w-50 h-50'} />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <SearchBox />
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>{' '}
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>User</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
Header.propTypes = {
  auth: PropTypes.objectOf({
    userInfo: {
      _id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      isAdmin: PropTypes.bool,
    },
  }),
  cart: PropTypes.objectOf({
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        _v: PropTypes.number,
        brand: PropTypes.string,
        category: PropTypes.string,
        countInStock: PropTypes.number,
        createdAt: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        numReviews: PropTypes.number,
        price: PropTypes.number,
        qty: PropTypes.number,
        rating: PropTypes.number,
        reviews: PropTypes.array,
        updatedAt: PropTypes.string,
        user: PropTypes.string,
      })
    ),
    shippingAddress: PropTypes.string,
    paymentMethod: PropTypes.string,
    itemsPrice: PropTypes.string,
    shippingPrice: PropTypes.string,
    taxPrice: PropTypes.string,
    totalPrice: PropTypes.string,
  }),
};
export default Header;
