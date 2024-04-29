import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError();



  return (
    <>
      <h1>404 Page Not Found</h1>
      <NavLink to={"/home"} replace > Back to Home </NavLink>
    </>
  )
}

export default ErrorPage