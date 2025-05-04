import {Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

// User
import Login from './components/login/Login'
import Main from './components/user/main/Main'

// Admin
import Users from './components/admin/users/Users'
import Tests from './components/admin/tests/Tests'
import Results from './components/admin/results/Results'
import AddUser from './components/admin/addUser/AddUser'

// User
import ListeningRules from './components/user/listeningRules/ListeningRules'

const App = () => {

  const sizeOption = useSelector(state => state.font.sizeOption);

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
        {/* User */}
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        
        {/* Admin */}
        <Route path='/users' element={<Users />} />
        <Route path='/tests' element={<Tests />} />
        <Route path='/results' element={<Results />} />

        {/* Components */}
        <Route path='/listeningrules' element={<ListeningRules />} />
        <Route path='/addUser' element={<AddUser />}/>
      </Routes>
    </div>
  )
}

export default App