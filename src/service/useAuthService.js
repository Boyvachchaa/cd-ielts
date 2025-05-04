import { useSelector } from 'react-redux';
import AuthService from './auth';

const useAuthService = () => {
  const { access_token, refresh_token, loggedIn } = useSelector(state => state.auth);

  const login = async (user) => {
    if (loggedIn) {
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
      return { access: access_token, refresh: refresh_token };
    } else {
      return await AuthService.userLogin(user);
    }
  };

  return {
    login,
    register: (user) => AuthService.userRegister(user, access_token),
    detectAdmin: (id) => AuthService.detectAdmin(id, access_token),
  };
};

export default useAuthService;
