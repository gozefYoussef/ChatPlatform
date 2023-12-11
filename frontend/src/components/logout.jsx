import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logout.png' ;
import { useAuth } from '../utils/AuthContext';
import { useEffect } from 'react';

const Logout = () => {
    const {user, handleUserLogout} = useAuth();
    const navigate = useNavigate();
    useEffect(()=> {
        if(user){
            navigate('/');
        }
    },[])
    const handleLogout = (e) => handleUserLogout(e);
  return (
    <div onClick={handleLogout} className='cursor-pointer'>
        <img src={Logo} alt='logout icon'/>
    </div>
  )
}

export default Logout