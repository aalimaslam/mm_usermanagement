import React from "react";
import Login from "./Components/Login/login.js";
import Register from "./Components/Register/register.js";
import { Routes, Route } from "react-router-dom";
import UserTable from "./Components/UserTable/UserTable.js";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserTable />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
