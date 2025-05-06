import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const localStorageLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return isLoggedIn || localStorageLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
