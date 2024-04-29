import { Outlet } from 'react-router-dom'

const AuthorizedRoutes = ({ allowedRoles }) => {

  return (
    <>
      <Outlet />
    </>
  )
}

export default AuthorizedRoutes