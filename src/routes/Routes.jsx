import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Thermistors from "../pages/Thermistors";
import Users from "../pages/Users";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Thermistors/>} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
};
