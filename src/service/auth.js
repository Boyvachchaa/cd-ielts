import axios from './api';

const AuthService = {
  async userRegister(user, token) {
    try {
      const response = await axios.post('/users/register-student/', user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  async userLogin(user) {
    try {
      const { data } = await axios.post('users/login/', user);
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  async detectAdmin(id, token) {
    try {
      const response = await axios.get(`/users/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Error detecting admin:', error);
      throw error;
    }
  },
};

export default AuthService;
