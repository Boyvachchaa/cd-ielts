import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar';
import AdminHeader from '../../../ui/adminHeader/AdminHeader';
import AddUserModal from '../addUserModal/AddUserModal'

import {
  registerUserFailure,
  registerUserStart,
  registerUserSuccess
} from '../../../slice/auth'
import AuthService from '../../../service/auth'

import Logo from '../../../assets/logo.png';

import './AddUser.scss';

export default function AddUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.auth);

  const registerHandler = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMsg('Both fields are required.');
      return;
    }

    if (password.length < 8) {
      setErrorMsg('Password must be at least 8 characters.');
      return;
    }

    dispatch(registerUserStart());

    const token = localStorage.getItem('access_token')?.trim();
    const user = { username, password };

    try {
      await AuthService.userRegister(user, token);
      dispatch(registerUserSuccess());
      setSuccessMsg('User registered successfully.');
      setErrorMsg(null);
      setUsername('');
      setPassword('');
      setShowModal(true);
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      dispatch(registerUserFailure());
      setSuccessMsg(null);
      setErrorMsg(error.response?.data?.detail || 'Registration failed.');
    }
  };

  return (
    <div className="add-test">
      <AdminNavbar />
      <div className="main_content">
        <AdminHeader />
        <div className="register-container">
          <div className="register-box outer-border">
            <div className="register-box middle-border">
              <div className="register-box inner-border">
                <div className="register-content">
                  <img src={Logo} alt="Logo" className="register-logo" />
                  
                  <input
                    type="text"
                    placeholder="Username"
                    className="register-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="register-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {errorMsg && (
                    <p className="text-danger mt-2">{errorMsg}</p>
                  )}
                  {successMsg && (
                      <AddUserModal
                        isOpen={showModal}
                        title="Success!"
                        message="New user has been registered successfully."
                        onClose={() => setShowModal(false)}
                      />
                  )}

                  <button
                    className="btn btn-primary text-light register-button mt-2"
                    disabled={isLoading || password.length < 8}
                    onClick={registerHandler}
                    type="submit"
                  >
                    {isLoading ? 'REGISTERING...' : 'REGISTER'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}