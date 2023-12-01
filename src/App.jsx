import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import SubNavbar from "./components/SubNavbar.jsx"
import Home from "./pages/Search.jsx"
import Skills from "./pages/Gaming.jsx"
import Projects from "./pages/SmartWatch.jsx"
import Contact from "./pages/Telephone.jsx"
import SkillDetails from "./pages/SkillDetails.jsx"
import NotFound from "./pages/NotFound.jsx"
import Service from "./pages/Service.jsx"
import Contacter from "./pages/Contacter.jsx"
import SAV from "./pages/SAV.jsx"
import Sidebar from "./components/Sidebar.jsx"
import CatalogueProduit from "./pages/Menu.jsx"
import Cart from "./pages/Cart.jsx"
import Search from "./pages/Search.jsx"
import Gaming from "./pages/Gaming.jsx"
import INFORMAIQUE from "./pages/Info.jsx"
import Telephone from "./pages/Telephone.jsx"
import SmartWatch from "./pages/SmartWatch.jsx"
import Electro from "./pages/Electro.jsx"
import TPS from "./pages/TPS.jsx"
import Impression from "./pages/Impression.jsx"
import Réseaux from "./pages/Réseaux.jsx"
import SignUp from "./pages/SignUp.jsx"
import BestPrice from "./pages/BestPrice.jsx"
import Catalogue from "./pages/Menu.jsx"
import Menu from "./pages/Menu.jsx"
import Info from "./pages/Info.jsx"

function App() {

  return (
    <div>
      <BrowserRouter>
      <Sidebar />
        <Navbar />
        <SubNavbar  />
        <div className="container">
          <Routes>
            <Route path="/" element={< BestPrice/>} />
            <Route path="/Search" element={Search}/>
            <Route path="/Cart" element={< Cart />} />
            <Route path="SignUp" element={<SignUp/>}/>
            <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
        
        <div className="container">
          <Routes>
            <Route path="/Service" element={<Service />} />
            <Route path="/contacter" element={<Contacter />} />
            <Route path="/SAV" element={<SAV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <div className="container">
            <Routes>
              {/* <Route path="/Menu" element={<Menu />} /> */}
              <Route path="/Info" element={< Info />} />
              <Route path="/Gaming" element={< Gaming />} />
            <Route path="/Smart-Watch" element={< SmartWatch />} />
            <Route path="/Telephone" element={< Telephone />} />
            <Route path="/Electro" element={<Electro />} />
             <Route path="/TPS" element={< TPS/>} />
             <Route path="/Impression" element= {< Impression/>} />
             <Route path="Reseaux" element={< Réseaux/>} />
            <Route path="/skills/:id" element={<SkillDetails />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
