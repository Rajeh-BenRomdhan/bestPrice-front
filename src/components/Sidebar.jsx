import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
     
  <div className="d-flex flex-column flex-shrink-0 p-3 bg-secondary " 
  style={{width: "200px", position: "fixed", zIndex: 999, height: "100vh", top: "50px"}}>
    
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
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle" to="/Telephone">TELEPHONE</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle" to="/Smart-Watch">SMART WATCH</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/Electromenager">ELECTROMENAGER</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/TV-Photo-Son">TV | PHOTO & SON</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/Impression">IMPRESSION</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark  dropdown-toggle" to="/Réseaux-securité">RESEAUX & SECURITE</NavLink>
            </li>
            <hr/>
      <li className="nav-item">
              <NavLink className="nav-link link-dark dropdown-toggle " to="/Gaming">GAMING</NavLink>
            </li>
            <hr/>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  // </div>
      );
}
 
export default Sidebar;