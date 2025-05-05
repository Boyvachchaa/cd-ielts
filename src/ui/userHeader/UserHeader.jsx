import { useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import FontSizeChanger from '../../ui/fontSizeChanger/FontSizeChanger'

import './UserHeader.scss';

const UserHeader = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user?.user);
  console.log(user)

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    toast.success('You have logged out successfully!');
    navigate('/');
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