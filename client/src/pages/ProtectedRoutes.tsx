import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  if (localStorage.getItem("jwt") === null) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
