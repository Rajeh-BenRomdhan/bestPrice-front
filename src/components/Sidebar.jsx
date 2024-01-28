import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice'

function Sidebar() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!isAuthenticated) {
    return null
  }
  
  return (
    <nav className="main-menu" style={{marginTop:'80px'}}>
      <ul>
        <li>
          <NavLink to="/">
            <i className="bi bi-house"></i>
            <span className="nav-text">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/CreateProduct">
            <i className="bi bi-plus-square"></i>
            <span className="nav-text">Create Product</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            <i className="bi bi-person"></i>
            <span className="nav-text">Profile</span>
          </NavLink>
        </li>
      </ul>

      <ul className="logout">
        <li onClick={handleLogout} style={{ cursor: "pointer", color: 'red' }}>
          <a>
            <i className="bi bi-power"></i>
            <span className="nav-text">Logout</span>
          </a>
        </li>
      </ul>
      </nav>
      
  )
}
 
export default Sidebar