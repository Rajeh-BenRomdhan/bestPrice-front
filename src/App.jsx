import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
// import NotFound from "./pages/NotFound.jsx"
// import Service from "./pages/Service.jsx"
import Contacter from "./pages/Contacter.jsx"
// import SAV from "./pages/SAV.jsx"
import Cart from "./pages/Cart.jsx"
import Search from "./pages/Search.jsx"
import Gaming from "./pages/Gaming.jsx"
import Telephone from "./pages/Telephone.jsx"
import SmartWatch from "./pages/SmartWatch.jsx"
import Electro from "./pages/Electro.jsx"
import TPS from "./pages/TPS.jsx"
import Impression from "./pages/Impression.jsx"
import Réseaux from "./pages/Réseaux.jsx"
import BestPrice from "./pages/BestPrice.jsx"
import Info from "./pages/Info.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchProducts } from "./store/productSlice.js"
import Catégorie from "./pages/Catégorie.jsx"
import { login } from "./store/userSlice.js"
import Sidebar from "./components/Sidebar.jsx"
import CreateProduct from "./pages/CreateProduct.jsx"
// import ProductDetails from "./pages/ProductDetails.jsx"
import UpdateProduct from "./pages/UpdateProduct.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userDetails = localStorage.getItem("userDetails")
    if (token && userDetails) {
      dispatch(login({ token, details: JSON.parse(userDetails) }))
    }
  }, [])
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={< BestPrice />} />
            <Route path="/Catégorie" element={< Catégorie />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Cart" element={< Cart />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />

            <Route path="/Info" element={<Info />} />
            <Route path="/Gaming" element={< Gaming />} />
            <Route path="/Smart-Watch" element={< SmartWatch />} />
            <Route path="/Telephone" element={< Telephone />} />
            <Route path="/Electro" element={<Electro />} />
            <Route path="/TPS" element={< TPS />} />
            <Route path="/Impression" element={< Impression />} />
            <Route path="/Reseaux" element={< Réseaux />} />
            <Route path="/CreateProduct" element={< CreateProduct />} />
            <Route path="/UpdateProduct/:id" element={< UpdateProduct />} />
            {/* <Route path="/Service" element={<Service />} /> */}
            <Route path="/Contacter" element={<Contacter />} />
            {/* <Route path="/SAV" element={<SAV />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
