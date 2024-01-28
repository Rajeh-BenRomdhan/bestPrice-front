import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestCreateProduct } from "../store/productSlice";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function CreateProduct() {
    const { isLoading } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [category, setCategory] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("price", Number(price))
        formData.append("photo", file)
        formData.append("quantity", quantity)
        formData.append("category", category)
        dispatch(requestCreateProduct({ formData, navigate }))
    }

    return (
        <Container className="mt-5">
            <h2>Create New Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="file" accept="image/*" multiple={false}
                        onChange={e => setFile(e.target.files[0])} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control name="price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                </Form.Group>
                <Form.Select onChange={(e) => setCategory(e.target.value)}>
                    <option>Choisis une categorie</option>
                    <option value="electromenager">Electromenager</option>
                    <option value="smartphone">Smartphone</option>
                </Form.Select>
                <Button type="submit" className="mx-auto d-block w-100" disabled={isLoading}>
                    {isLoading ? <Spinner size="sm" /> : <span>Add</span>}
                </Button>
            </Form>
        </Container>
    )
}
export default CreateProduct;