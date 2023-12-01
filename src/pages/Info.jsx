import { NavLink } from "react-router-dom";


const Info = () => {
    return ( 
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-secondary " 
  style={{width: "200px", position: "fixed", zIndex: 999, height: "100vh", top: "50px"}}>
    
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none
       dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>
        <span className="fs-2 btn btn-info"><h4>Informatique</h4></span>
        </strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
      <li className="nav-item  ">
              <NavLink className="nav-link link-dark " to="/OrdinateurPortable">Ordinateur Portable</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark " to="/OrdinateurBureau">Ordinateur Bureau</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark" to="/ComposantInformatique">Composant Informatique</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark " to="/Tablettes">Tablettes</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark " to="/Stockage">Stockage</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark " to="/Accessoires">Accessoires</NavLink>
            </li>
            <hr/>
            <li className="nav-item">
              <NavLink className="nav-link link-dark  " to="/Serveurs">Serveurs</NavLink>
            </li>
            <hr/>
            </ul>
            </div>
            </div>
     );
}
 
export default Info;