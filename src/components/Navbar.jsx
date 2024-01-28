import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "fixed", zIndex: 999, width: "100%", top: "0px" }} >

      <div className="container-fluid">
        <Link className="navbar-brand btn btn-primary" to="/"><h1>Best Price</h1></Link>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center link-dark text-decoration-none
       dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>
              <span className="fs-2 btn btn-info"><h2>Catégorie</h2></span>
            </strong>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li className="nav-item  ">
              <NavLink className="nav-link link-dark dropdown-toggle dropdown-toggle-split " to="/Info">INFORMAIQUE</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle" to="/Telephone">TELEPHONE</NavLink>
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
              <NavLink className="nav-link link-dark dropdown-toggle " to="/TV-Photo-Son">TV | PHOTO & SON</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/Impression">IMPRESSION</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark  dropdown-toggle" to="/Réseaux-securité">RESEAUX & SECURITE</NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/Gaming">GAMING</NavLink>
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