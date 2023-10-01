import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Skills from "./pages/Skills.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import SkillDetails from "./pages/SkillDetails.jsx"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills/:id" element={<SkillDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
