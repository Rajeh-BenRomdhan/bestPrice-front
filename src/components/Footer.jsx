import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid py-0" style={{
      backgroundColor: " #929fba",
      // position: "fixed",
      zIndex: -1,
      // width: "100%",
      // bottom: "0px"
    }}>

      <footer className="text-center text-lg-start text-white" >

        {/* <div className="container p-2 pb-0"> */}

        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-2">
            <h6 className="text-uppercase mb-2 font-weight-bold">Contact</h6>
            <p><i className="bi bi-geo-alt mr-3"></i> New York, NY 10012, US</p>
            <p><i className="bi bi-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="bi bi-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="bi bi-telephone mr-3"></i> + 01 234 567 89</p>
            <p><i className="bi bi-whatsapp mr-3"></i> + 01 234 567 89</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-2">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#3b5998", href: "#!", role: "button" }}>
              <i className="bi bi-facebook"></i></a>

            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: " #55acee", href: "#!", role: "button" }}>
              <i className="bi bi-twitter"></i></a>
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39", href: "#!", role: "button" }}>
              <i className="bi bi-google"></i></a>
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#ac2bac", href: "#!", role: "button" }}>
              <i className="bi bi-instagram"></i></a>
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca", href: "#!", role: "button" }}>
              <i className="bi bi-linkedin"></i></a>
            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#333333", href: "#!", role: "button" }}>
              <i className="bi bi-github"></i></a>
          </div>
        </div>

        {/* </div> */}
      </footer>

    </div>
    // </nav>
  )
}
{/* <nav className="navbar navbar-expand navbar-dark bg-secondary py-0" style={{ position: "fixed", zIndex: 999, width: "100%", bottom: "0px" }}>
           <div className="container-fluid">
           <a className="navbar-brand" href="#"></a>
       
             <div className="d-flex align-items-center">

              <NavLink className="nav-link" to="/Service Entreprise">Service Entreprise</NavLink>
            
              <NavLink className="nav-link" to="/SAV">SAV</NavLink>
            
              <NavLink className="nav-link" to="/Contacter">Contacter</NavLink>
            </div>
             </div>
           </nav> */}

export default Footer;