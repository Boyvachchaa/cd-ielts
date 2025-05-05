import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AdminHeader from '../../../ui/adminHeader/AdminHeader';
import AdminNavbar from '../../../ui/adminNavbar/AdminNavbar';

import UserService from '../../../service/user'

import Spinner from '../../../assets/spinner.svg';

import './Users.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch users and handle loading state
  const getAllUser = async () => {
    const token = localStorage.getItem('access_token')?.trim();
    if (!token) {
      toast.error('Missing or invalid token!');
      return;
    }

    try {
      const response = await UserService.getUser(token);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setLoading(false); 
      toast.error('Failed to load users.');
    }
  };

  // Delete user and update the list
  const deleteUser = async (id) => {
    const token = localStorage.getItem('access_token')?.trim();
    if (!token) {
      toast.error('Missing or invalid token!');
      return;
    }

    try {
      await UserService.deleteUser(id, token);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success('User deleted successfully!');
    } catch (error) {
      console.error('Failed to delete user:', error);
      toast.error('An error occurred while deleting the user.');
    }
  };

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  // Fetch all users when component mounts
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="add-test">
      <AdminNavbar />
      <div className="main_content">
        <AdminHeader />
        <div className="main_head container mt-4 d-flex justify-content-between align-items-center">
          <div className="add_user p-3">
            <i className="fas fa-search mx-2"></i>
            <input
              type="text"
              placeholder="search user..."
              className="search_user_input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Link to="/addUser" className="add_user">
            Add Student
          </Link>
        </div>

        <div className="main_body container mt-4 px-4">
          {loading ? (
            <div className="loading d-flex justify-content-center align-items-center">
              <img src={Spinner} alt="spinner" />
            </div>
          ) : filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div
                className="user d-flex justify-content-between align-items-center"
                key={user.id || index}
              >
                <p>{user.username}</p>
                <i
                  className="fas fa-trash"
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to delete user "${user.username}"?`)) {
                      deleteUser(user.id);
                    }
                  }}
                ></i>
              </div>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;