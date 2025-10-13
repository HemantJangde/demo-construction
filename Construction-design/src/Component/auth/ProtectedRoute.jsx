import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin");

  // 🔐 If not logged in, redirect to login (replace prevents going back)
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ If logged in, render the dashboard
  return children;
}




