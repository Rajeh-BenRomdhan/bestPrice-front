import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: "fixed", zIndex: 999, width: "100%", top: "0px" }} >
      <div className="container-fluid">
        <a className="navbar-brand btn btn-primary" href="#"><h1>Best Price</h1></a>
        <button className="navbar-toggler" type="button" 
        data-bs-toggle="collapse" data-bs-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Search">
        <input className="form-control me-2 " type="text " placeholder="Search" />Search
        <i className="fa fa-fw fa-search"></i>
        </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/Cart">
            <i className="bi bi-cart"></i>
            <span className="cart-tatal--item"></span>
            </NavLink>
           </li>
            <li className="nav-item">
              <NavLink className="nav-link link-dark bg-white rounded float-end" to="/SignUp"><h4>SIGN UP</h4></NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;