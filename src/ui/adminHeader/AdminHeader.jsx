import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../slice/auth';

import './AdminHeader.scss';

const AdminHeader = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
    toast.success('You have logged out successfully!');
  };

  return (
    <div className="header">
      <span className="admin-label">{localStorage.getItem('username')}</span>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminHeader;