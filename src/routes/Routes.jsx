import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Users from "../pages/Users";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
};
