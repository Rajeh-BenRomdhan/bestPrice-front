import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import DeleteProduct from "./DeleteProduct";
import  Badge  from "react-bootstrap/Badge";
import { useState } from "react";
import { addItem } from "../store/cartSlice";

function ProductCard ({product}) {
  const [showMore, setShowMore] = useState(false);
 const dispatch = useDispatch()
  const { details: userDetails } = useSelector(state => state.user);
  console.log({userDetails})
  console.log({product})
  return (
    <Card className="d-flex" style={{width:"500px"}}>
      <Card.Img variant="top" className="card-img" src={product.photo} />
      <Card.Body>
        <Card.Title className="text-truncate">{product.title}</Card.Title>
       
        <Card.Text className="flex-child short-and-fixed">
         <p>{showMore ? product.description : `${product.description.substring(0, 50)}...`}</p> 
          {product.description.length > 100 && (
         <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>  
      )}
      </Card.Text>
       
        <Badge pill bg="primary">{product.price} TND</Badge>
        <br/>
        <button className="btn btn-primary" onClick={() => dispatch(addItem(product))}>Ajouter au panier</button>
        {product.quantity > 0 ? (
        <h5> ({product.quantity} in stock) </h5>
      ) : (
        <h5> Rupture de stock </h5>
      )}
        <div className="d-flex justify-content-center text-primary gap-2">

        <Link to={`/product/${product._id}`} target='_blank' >
            <i className="bi bi-box-arrow-up-right text-primary h3"></i> 
          </Link>
          
           {userDetails?.id == product.user._id && (
            <>
              <Link to={`/UpdateProduct/${product._id}`} >
                <i className="bi bi-pencil-square text-warning h3"></i>
              </Link>
              <DeleteProduct product={product} />
            </>
          )}
        </div>

      </Card.Body>
    </Card>
    );
}

export default ProductCard;