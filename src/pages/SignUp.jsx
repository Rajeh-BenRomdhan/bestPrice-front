import { useState } from "react";

const SignUp = () => {
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

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Signing up with:', formData);
  };

  return (
    <div className="container mt-5">
    <div className="row d-flex justify-content-center">
    <div className="col-sm-6 p-5">
      <br/>
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input type="email" name="email" 
          value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <br/>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br/>
        <br />
        <button type="submit">Connexion</button>
        <button type="submit">Créer un compte</button>

      </form>
      </div>
    </div>
    </div>
  );
};
 
export default SignUp;