import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/users" element={<div>Users</div>} />
        </Route>
      </Routes>
    </Router>
  );
};
