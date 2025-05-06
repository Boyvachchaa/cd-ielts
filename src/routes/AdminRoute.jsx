import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isStudent = useSelector((state) => state.auth.user?.is_student);

  if (!isLoggedIn || isStudent) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
