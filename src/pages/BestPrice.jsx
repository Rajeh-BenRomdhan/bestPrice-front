import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";


function BestPrice() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
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
      <Row>
        {list.map((product, i) => (
          <Col sm={6} md={4} lg={4} key={i} className=" d-flex mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default BestPrice;