import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// User
import Login from './components/login/Login';
import Main from './components/user/main/Main';
import ListeningRules from './components/user/listeningRules/ListeningRules';

// Admin
import Users from './components/admin/users/Users';
import Tests from './components/admin/tests/Tests';
import Results from './components/admin/results/Results';
import AddUser from './components/admin/addUser/AddUser';

import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isStudent = useSelector((state) => state.auth.user?.is_student);
  const sizeOption = useSelector((state) => state.font.sizeOption);

  const getFontSize = () => {
    switch (sizeOption) {
      case 'low':
        return '12px';
      case 'medium':
        return '16px';
      case 'high':
        return '24px';
      default:
        return '16px';
    }
  };

  return (
    <div style={{ fontSize: getFontSize(), transition: 'font-size 0.3s ease' }}>
      <Routes>
        {/* Not logged in */}
        {!isLoggedIn && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}

        {/* Student routes */}
        {isLoggedIn && isStudent && (
          <>
            <Route path="/main" element={<Main />} />
            <Route path="/listeningrules" element={<ListeningRules />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </>
        )}

        {/* Admin routes */}
        {isLoggedIn && !isStudent && (
          <>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Navigate to="/users" />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tests" element={<Tests />} />
              <Route path="/results" element={<Results />} />
              <Route path="/addUser" element={<AddUser />} />
            </Route>
            <Route path="*" element={<Navigate to="/users" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;