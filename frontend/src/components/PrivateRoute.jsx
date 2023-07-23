import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
//Must be logged in for the outlet to pass through routes else go login
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
