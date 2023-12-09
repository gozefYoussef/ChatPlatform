import {createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    useEffect(()=> {
        setLoading(false);
    },[])

    const handleUserLogin = async (e,loginForm) =>{
        e.preventDefault();
        try {
            const response = fetch('https://localhost:8000/login',{
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    username: loginForm.username,
                    password: loginForm.password
                }),
            });
            if(response.ok){
                const data = await response;
                return setUser(data.user)
            } else{
                console.log('Credentials is invalid')
            }

        } catch(error) {
            console.log(error)
        }
    }
    const handleUserRegister = async (e,RegisterForm) =>{
        e.preventDefault();
        try {
            const response = fetch('https://localhost:8000/login',{
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    username: loginForm.username,
                    password: loginForm.password
                }),
            });
            if(response.ok){
                const data = await response;
                return setUser(data.user)
            } else{
                console.log('Credentials is invalid')
            }

        } catch(error) {
            console.log(error)
        }
    }

    const contextData = {
        user,
        handleUserLogin,
        handleUserRegister,
    }

  return (
    <AuthContext.Provider value={contextData}>
        {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;