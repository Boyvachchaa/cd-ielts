import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './AdminHeader.scss';

const AdminHeader = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user?.user);
  console.log(useSelector((state) => state.auth))

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    toast.success('You have logged out successfully!');
    navigate('/');
  };

  return (
    <div className="header">
      <span className="admin-label">{user?.username || 'User'}</span>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminHeader;