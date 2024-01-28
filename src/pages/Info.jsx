import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Info = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5040/product/")
      .then(response => {
        const info = response.data;
        setProducts(info)

      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      {
        products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))};
    </div>
  )
}
export default Info;