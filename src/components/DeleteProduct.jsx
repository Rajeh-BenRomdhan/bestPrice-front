import { useState } from "react";
import  Modal  from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { requestDeleteProduct } from "../store/productSlice";
import  Button from "react-bootstrap/Button";

function DeleteProduct ({product}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    return (
        <>
        <i className="bi bi-trash text-danger h3" onClick={handleShow}></i>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure that you want to delete the itemem <span className="fw-bold"> {product.title} </span></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => dispatch(requestDeleteProduct({ id: product._id, closeModal: handleClose }))}>
            Delete
          </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
export default DeleteProduct;