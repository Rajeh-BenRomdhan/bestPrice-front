import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

function BestPrice() {
  const params = useParams()
  let category = params.id
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts(category))
  }, [category])
  const { list, error, isLoading } = useSelector(state => state.products)
  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (error) {
    return (
      <Alert variant="danger" className="m-5">
        {error}
      </Alert>
    )
  }
  return (
    <div style={{ marginTop: '100px', marginBottom: '60px', marginLeft:'50px' }}>
<div id="demo" className="carousel slide" data-bs-ride="carousel">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>


  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.clicinformatique62.fr/storage/2016/03/PCouPCPortableou-tablette.png" alt="" className="d-flex" style={{width:"100%", height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://medias3-2.ubaldi.com/guides/42/images/mobiles-ga-smartphone-ubaldi.jpg" alt="" className="d-flex" style={{width:"100%", height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://static.theprint.in/wp-content/uploads/2023/04/Untitled-design-30-1.jpg" alt="" className="d-flex" style={{width:"100%", height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://iftinfo.com/wp-content/uploads/2022/09/Z-33-Smart-watch-600x600.jpg" alt="" className="d-flex" style={{width:"100%", height:"400px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8tgdQRdoeoMptlEWj5aFk5Ln12LlelpWTXA&usqp=CAU" alt="" className="d-flex" style={{width:"100%", height:"400px"}}/>
    </div>
  </div>
  
 
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>


    
      
      <Row>
        {list.map((product, i) => (
          <Col sm={6} md={4} lg={4} key={i} className=" d-flex mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
    </div>
  )
}
export default BestPrice;