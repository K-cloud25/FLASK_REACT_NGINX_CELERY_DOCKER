import React from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <>
      <h1>Login</h1>
      <NavLink to={"/home"} replace > Go to home </NavLink>
    </>
  );
};

export default Login;
