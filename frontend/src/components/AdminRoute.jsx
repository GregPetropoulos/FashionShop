import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
//Must be logged in  as Admin for the outlet to pass through routes else go login
const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to='/login' replace />;
};

export default AdminRoute;
