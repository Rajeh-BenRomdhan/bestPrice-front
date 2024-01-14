import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"
const Cart = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        Code: '',
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
        <div className="checkout mt-3">
            <section className="p-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <span className="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Product name</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Second product</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">-$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>
                            <Form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control me-2" placeholder="Promo code" />
                                    <div className="input-group-append">
                                        <Button type="button" className="btn btn-dark px-4 rounded-pill">Redeem</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Détails de Facturation</h4>
                            <Form className="needs-validation" novalidate>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="mb-3">
                   <label for="username" className="form-label">Username</label>
                   <div className="input-group">
                   <div className="input-group-prepend">
                       <span className="input-group-text">@</span>
                   </div>
                   <input type="text" className="form-control" id="username" placeholder="Username" required />
                   <div className="invalid-feedback">
                       Your username is required.
                   </div>
                   </div>
               </div> */}
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                {/* <div className="mb-3">
                   <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                   <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
               </div> */}
                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label for="country" className="form-label">Country</label>
                                        <select className="form-select d-block w-100" id="country" required>
                                            <option value="">Choose...</option>
                                            <option>TUNISIE</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="state" className="form-label">Région</label>
                                        <select className="form-select d-block w-100" id="state" required>
                                            <option value="">Choose...</option>
                                            <option>SFAX</option>
                                            <option>MAHDIYA</option>
                                            <option>SOUSSE</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="ville" className="form-label">Ville</label>
                                        <select className="form-select d-block w-100" id="ville" required>
                                            <option value="">Choose...</option>
                                            <option>Sfax jadida</option>
                                            <option>Agareb</option>
                                            <option>Jbenyana</option>
                                            <option>Bir ALi</option>
                                            <option>Mahres</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="code" className="form-label">Code Postal </label>
                                        <input type="text" className="form-control" id="code" placeholder="" required />
                                        <div className="invalid-feedback">
                                            code required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="same-address" />
                                    <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" />
                                    <label className="form-check-label" for="save-info">Save this information for next time</label>
                                </div>
                                <hr className="mb-4" />
                                <h4 className="mb-3">Payment</h4>
                                <div className="d-block my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                                        <label className="form-check-label" for="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" for="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="cc-name" className="form-label">Name on card</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="cc-number" className="form-label">Credit card number</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label for="cc-expiration" className="form-label">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="cc-expiration" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <Button className="btn btn-dark px-4 rounded-pill" type="button">Place Order</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
export default Cart;