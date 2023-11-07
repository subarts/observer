import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRouters = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/*"></Route>
    </Routes>
  );
};
export default AppRouters;
