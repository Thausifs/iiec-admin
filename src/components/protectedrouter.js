import React from "react";
import { Outlet, Navigate } from "react-router-dom";


function ProtectedRoute() {
  const auth = localStorage.getItem("Employee_Type");
  return auth ? (
    <>
  
          <Outlet />
      
    </>
  ) : (
          
         <Navigate to="/" />
  );
}

export default ProtectedRoute;