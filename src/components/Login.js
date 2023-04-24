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
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Login</h2>
        {error && <div className="alert">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email-input">Email:</label>
            <input
              type="email"
              id="email-input"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Password:</label>
            <input
              type="password"
              id="password-input"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            data-testid="submit"
            className="btn btn-primary"
            id="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
