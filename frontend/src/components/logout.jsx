import Logo from '../assets/logout.png' ;
import { useAuth } from '../utils/AuthContext';

const Logout = () => {
    const { handleUserLogout} = useAuth();

    const handleLogout = (e) => handleUserLogout(e);
  return (
    <div onClick={handleLogout} className='cursor-pointer'>
        <img src={Logo} alt='logout icon'/>
    </div>
  )
}

export default Logout