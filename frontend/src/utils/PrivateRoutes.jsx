import {Outlet,Navigate} from 'react-router-dom'

const PrivateRoutes = () => {
  let user = false;
  return (
    <>
    {user ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}

export default PrivateRoutes