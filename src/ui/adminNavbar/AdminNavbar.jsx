import {Link} from 'react-router-dom'

import Logo from '../../assets/logo.png'

import './AdminNavbar.scss'

const AdminNavbar = () => {

    return (
        <aside>
            <img src={Logo} alt="Logo" />
            <div className="menu">
                <Link
                    className='menu'
                    to="/users"
                >
                    Students
                </Link>

                <Link
                    className='menu'
                    to="/tests"
                >
                    Tests
                </Link>

                <Link
                    className='menu'
                    to="/results"
                >
                    Results
                </Link>

                
            </div>
        </aside>
    )
}

export default AdminNavbar