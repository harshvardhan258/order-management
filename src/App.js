import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/Orders";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/orders"
          element={
            loggedIn ? (
              <Orders handleLogout={handleLogout} />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
