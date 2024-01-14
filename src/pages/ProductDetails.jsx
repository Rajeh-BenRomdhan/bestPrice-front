import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchProductById } from "../store/productSlice";
import { Table } from "react-bootstrap";

export default function ProductDetails (){
  const {id} = useParams()
  const dispatch = useDispatch()
  const { selected, isLoading, error} = useSelector(state => state.products)
    useEffect(() => {
      dispatch(fetchProductById(id))
    }, [dispatch, id])
    if(isLoading) {
     return <h2>Loading...</h2>
    }
    if(error) {
      return (
        <div className="alert alert-danger">
          <h3>Product not found</h3>
        </div>
      )
    }
    if (selected) {
      return (
        <>
        <h2>Product details</h2>
        <img alt="product-img" className="mb-3 d-block mx-auto" style={{ maxWidth: 500 }} src={selected.photo} />
        <Table striped bordered hover style={{ maxWidth: 500 }} className="mx-auto">
          <tbody>
            <tr>
              <td>Title</td>
              <td>{selected.title}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{selected.description}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{selected.price}</td>
            </tr>
          </tbody>
        </Table>
        
        </>
      )
    }
}