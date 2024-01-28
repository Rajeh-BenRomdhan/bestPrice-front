import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchProductById, requestUpdateProduct } from "../store/productSlice";
import  Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import  Form  from "react-bootstrap/Form";

function UpdateProduct() {
    const { selected } = useSelector( state => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const [productData, setProductData]= useState({
        title:"",
        description:"",
        photo:"",
        price:"",
        quantity:""
    })
    useEffect(() => {
        if (selected) {
            setProductData(selected)
        }
    }, [selected])
    useEffect(() => {
        dispatch(fetchProductById(id))
    }, [dispatch, id])

    function handleSubmit(e) {
        e.preventDefault ()
        const { title, description, photo, price, quantity} = productData
        dispatch(requestUpdateProduct({id, data: {title, description, photo, price, quantity}, navigate}))

    }
    function handleChange(e) {
        setProductData(prevProductData => ({... prevProductData, [e.target.name]: e.target.value}))
    }
    return (
        <Container className="mt-5">
            <h2>Update Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" value={productData.title} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={productData.description} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control name="photo" value={productData.photo} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="number" value={productData.price} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>quantity</Form.Label>
                    <Form.Control name="quantity" value={productData.quantity} onChange={handleChange}/>
                </Form.Group>
                < Button type="submit" className="mx-auto d-block w-100">Update</Button>
            </Form>
        </Container>
    )
} 
export default UpdateProduct;