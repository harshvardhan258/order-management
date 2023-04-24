import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/login";
import { isValidEmail } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Invalid email address.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }
    dispatch(login(email, password, setError));
    navigate("/orders");
    // try {
    //   const response = await dispatch(login(email, password, setError));
    //   if (response.success) {
    //     navigate("/orders");
    //   }
    // } catch (error) {
    //   console.log("Not able to login");
    // }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Login</h2>
        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
