import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../slice/auth';

import Logo from '../../assets/logo.png';
import FontSizeChanger from '../../ui/fontSizeChanger/FontSizeChanger'

import './UserHeader.scss';

const UserHeader = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
    toast.success('You have logged out successfully!');
  };

  const imgStyle = { width: '80px' };

  return (
    <header className='border-bottom'>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={Logo} alt="Company Logo" style={imgStyle} />
        </div>
        <nav className="d-flex align-items-center justify-content-center">
          <FontSizeChanger />
          <p className="mx-4 mb-0 candidate_name">{localStorage.getItem('username')}</p>
          <button className="btn btn-primary ms-3" onClick={handleLogout}>Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default UserHeader;