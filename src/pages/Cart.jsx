import { useState } from "react";

const Cart = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log('Placing order with:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
    <div className="col-sm-6  p-5">
      <h2>Panier</h2>
      <form onSubmit={handlePlaceOrder} >
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
        </label>
        <br />
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
    </div>
    </div>
  );
};
export default Cart;