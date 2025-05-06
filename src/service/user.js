import axios from "axios";

const UserService = {
    
    // Fetch all users
  async getUser(token) {
    try {
      const response = await axios.get('/users/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  // Detect if user is an admin
  async detectAdmin(data, token) {
    try { 
      const response = await axios.get(`/users/${data.id}/`, {
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

  // Delete a user by ID
  async deleteUser(id, token) {
    try {
      const response = await axios.delete(`/users/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },
}

export default UserService