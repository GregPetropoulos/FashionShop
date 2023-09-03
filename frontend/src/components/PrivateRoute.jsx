import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//Must be logged in for the outlet to pass through routes else go login
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
PrivateRoute.propTypes = {
  userInfo: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};
export default PrivateRoute;
