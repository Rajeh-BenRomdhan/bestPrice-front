import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  return (
    <nav className="navbar navbar-expand-lg "
      style={{ position: "fixed", zIndex: 999, width: "100%", top: "0px", background:"#6B8E23" }} >

      <div className="container-fluid">
        <Link className="navbar-brand btn btn-white" to="/"><h1>BEST PRICE</h1></Link>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center link-dark text-decoration-none
       dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>
              <span className="fs-2 btn btn-white"><h3>CATEGORIES</h3></span>
            </strong>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li className="nav-item  ">
              <NavLink className="nav-link link-dark dropdown-toggle dropdown-toggle-split " to="/category/informatique">INFORMAIQUE</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/category/gaming">GAMING</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle" to="/category/smartphone">SMART PHONE</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/category/electromenager">ELECTROMENAGER</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/category/TV-Photo-Son">TV | PHOTO & SON</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/category/Impression">IMPRESSION</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark  dropdown-toggle" to="/category/Réseaux-securité">RESEAUX & SECURITE</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle" to="/Telephone">TELEPHONE</NavLink>
            </li>
            <hr />
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <Form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Button className="btn btn-outline-success" type="submit">Search</Button>
            </Form>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Cart">
                <i className="bi bi-cart3"><span className="badge bg-danger">{cartItems.reduce((acc, cv) => { return acc + cv.qty }, 0)}</span></i>
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown">LOGIN</a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/SignIn">SignIn</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/SignUp">SignUp</NavLink></li>
                </ul>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;