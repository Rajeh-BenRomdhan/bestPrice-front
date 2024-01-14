import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
// import DeleteProduct from "./DeleteProduct";
import  Badge  from "react-bootstrap/Badge";

function ProductCard ({product}) {
  const { details: userDetails } = useSelector(state => state.user);
  console.log({userDetails})
  return (
    <Card className="d-flex" style={{width:"600px"}}>
      <Card.Img variant="top" className="card-img" src={product.photo} />
      <Card.Body>
        <Card.Title className="text-truncate">{product.title}</Card.Title>
        <Card.Text className="text-truncate">{product.description} </Card.Text>
        <Badge pill bg="primary">{product.price} TND</Badge>
        <br/>
        <a href="#" className="btn btn-primary">Ajouter au panier</a>
        {product.quantity > 0 ? (
        <h5> ({product.quantity} in stock) </h5>
      ) : (
        <h5> Rupture de stock </h5>
      )}
        <div className="d-flex justify-content-center tex-primaryt gap-2">

        <Link to={`/products/${product._id}`} target='_blank' >
            {/* <i className="bi bi-box-arrow-up-right text-primary h3"></i> */}
          </Link>
          
          {/* {userDetails?._id === product.user._id && (
            <>
              <Link to={`/update-product/${product._id}`}>
                <i className="bi bi-pencil-square text-warning h3"></i>
              </Link>
              <DeleteProduct product={product} />
            </>
          )} */}
        </div>

      </Card.Body>
    </Card>
    );
}

export default ProductCard;