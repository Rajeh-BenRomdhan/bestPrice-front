import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../store/userSlice";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate()
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(requestLogin({email: formData.email, password: formData.password, navigate}))
  };

  return (
    <div className="container mt-5">
    <div className="row d-flex justify-content-center">
    <div className="col-sm-6 p-5">
      <br/>
      <form onSubmit={handleSignIn}>
        <label>
          Email:<br />
          <input type="email" name="email" 
          value={formData.email} onChange={handleChange} />
        </label>
        
        <br/>
        <label>
          Password:<br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br/>
        <br />
        <button className="btn btn-info" type="submit">Sign In</button>
        <br/><br/>
      </form>
      </div>
    </div>
    </div>
  );
};
 
export default SignIn;