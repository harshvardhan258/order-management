import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/login";
import { isValidEmail } from "../utils/validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    console.log("inside handleSubmit");
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
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
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
  );
};

export default Login;
