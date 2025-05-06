import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import Login from './components/login/Login';
import Main from './components/user/main/Main';
import ListeningRules from './components/user/listeningRules/ListeningRules';
import Users from './components/admin/users/Users';
import Tests from './components/admin/tests/Tests';
import Results from './components/admin/results/Results';
import AddUser from './components/admin/addUser/AddUser';
import AddTest from './components/admin/addTest/AddTest';

// Route guards
import AdminRoute from './routes/AdminRoute';
import StudentRoute from './routes/StudentRoute';

const App = () => {
  const sizeOption = useSelector((state) => state.font.sizeOption);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isStudent = useSelector((state) => state.auth.user?.is_student);

  const getFontSize = () => {
    switch (sizeOption) {
      case 'low': return '12px';
      case 'medium': return '16px';
      case 'high': return '24px';
      default: return '16px';
    }
  };

  return (
    <div style={{ fontSize: getFontSize(), transition: 'font-size 0.3s ease' }}>
      <Routes>
        {/* Public route */}
        <Route path="/" element={isLoggedIn ? <Navigate to={isStudent ? '/main' : '/users'} replace /> : <Login />} />

        {/* Admin-only routes */}
        <Route element={<AdminRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/results" element={<Results />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/addTest" element={<AddTest />} />
        </Route>

        {/* Student-only routes */}
        <Route element={<StudentRoute />}>
          <Route path="/main" element={<Main />} />
          <Route path="/listeningrules" element={<ListeningRules />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
