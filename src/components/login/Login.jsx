import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
} from '../../slice/auth';
import AuthService from '../../service/auth';

import Logo from '../../assets/logo.png';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMsg('Please enter both username and password.');
      return;
    }

    dispatch(loginUserStart());

    try {
      const response = await AuthService.userLogin({ username, password });
      const decoded = jwtDecode(response.access);
      const token = response.access;

      const userInfoRes = await AuthService.detectAdmin(decoded.user_id, token);
      const userInfo = userInfoRes.data;

      dispatch(
        loginUserSuccess({
          token,
          user: {
            id: decoded.user_id,
            username: userInfo.username,
            is_student: userInfo.is_student,
            is_staff: userInfo.is_staff,
          },
        })
      );

      setErrorMsg(null);
      navigate(userInfo?.is_student ? '/main' : '/users');
    } catch (error) {
      const errDetail =
        error.response?.data?.detail || 'Login failed. Please try again.';
      setErrorMsg(errDetail);
      dispatch(loginUserFailure(errDetail));
      toast.error(errDetail);
    }
  };

  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="login_item rounded p-5">
        <div className="logo d-flex justify-content-center align-items-center mb-3">
          <img src={Logo} alt="Logo" className="w-50" />
        </div>

        <form onSubmit={loginHandler} className="form-floating align-items-center">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 mt-2 w-100"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 mt-2 w-100"
            autoComplete="current-password"
          />
          {errorMsg && (
            <p className="w-75 text-danger text-center mt-2">{errorMsg}</p>
          )}
          <button
            className="btn btn-primary text-light w-100 mt-3"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
