import { useState } from "react";
import { Button } from "react-bootstrap";
import  Form  from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestRegister } from "../store/userSlice";


function SignUp  () {
   const dispatch = useDispatch();
   const navigate = useNavigate()

   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [phone, setphone] = useState("")
   const [address, setaddress] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestRegister({ firstName, lastName, phone, address, email, password, navigate}))
      };
      return  (
        <div className="container mt-5 p-5">
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label >First Name</Form.Label>
        <Form.Control style={{ boxShadow: "5px 10px 18px #888888"}}
          placeholder="Enter first name" 
          value={firstName} 
          onChange={e => setFirstName(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control style={{ boxShadow: "5px 10px 18px #888888"}}
          placeholder="Enter last name" 
          value={lastName} 
          onChange={e => setLastName(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control style={{ boxShadow: "5px 10px 18px #888888"}}
          placeholder="Enter phone" 
          value={phone} 
          onChange={e => setphone(e.target.value)} 
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control style={{ boxShadow: "5px 10px 18px #888888"}}
          placeholder="Enter address" 
          value={address} 
          onChange={e => setaddress(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{ boxShadow: "5px 10px 18px #888888"}}
          type="email" 
          placeholder="Enter email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control style={{ boxShadow: "5px 10px 18px #888888"}}
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ boxShadow: "5px 10px 18px #888888"}}>
        Submit
      </Button>
    </Form>
    </div>
  )
};
     
    export default SignUp;
