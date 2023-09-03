import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//Must be logged in  as Admin for the outlet to pass through routes else go login
const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to='/login' replace />;
};

AdminRoute.propTypes = {
  userInfo: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};
export default AdminRoute;
