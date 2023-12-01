import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-secondary py-0" style={{ position: "fixed", zIndex: 999, width: "100%", bottom: "0px" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
       
        <div className="d-flex align-items-center">

              <NavLink className="nav-link" to="/Service Entreprise">Service Entreprise</NavLink>
            
              <NavLink className="nav-link" to="/SAV">SAV</NavLink>
            
              <NavLink className="nav-link" to="/Contacter">Contacter</NavLink>
           </div>
      </div>
    </nav>
  )
}

export default SubNavbar;