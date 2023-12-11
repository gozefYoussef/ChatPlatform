import {createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
const AuthContext = createContext();
import '../index.css'

export const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    useEffect(()=> {
        setLoading(false);
    },[])

    const handleUserLogout = async (e) =>{
        e.preventDefault();
        setUser(null);
    }

    const handleUserLogin = async (e,loginForm) => { 
        e.preventDefault();
        let data = [];
        try {
           await fetch('http://localhost:8000/login',{
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(loginForm),
            })
            .then(response => response.json())
            .then(res => {data = res})
            if(data.ok == true){
                console.log(data.ok)
                setUser(data.user)
            } else{
                console.log('Credentials is invalid')
            }

        } catch(error) {
            console.log(error)
        }
    };
    const handleUserRegister = async (e,RegisterForm) =>{
        e.preventDefault();
        let data = [];
        try {
            await fetch('http://localhost:8000/register',{
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    username: RegisterForm.username,
                    password: RegisterForm.password,
                    fullname: RegisterForm.fullName,
                    phone: RegisterForm.phoneNumber,
                    avatarURL: RegisterForm.avatarURL
                }),
            })
            .then(response => response.json())
            .then(res => {data = res})
            if(data.existed){
                window.alert('User is exited on DB')
            }
            if(data.ok){
                console.log(data.ok)
                setUser(data.user)
            } else{
                console.log('Server Error')
            }

        } catch(error) {
            console.log(error)
        }
    }

    const contextData = {
        user,
        handleUserLogin,
        handleUserRegister,
        handleUserLogout
    }

  return (
    <AuthContext.Provider value={contextData}>
        {loading ? <div className="bg flex h-screen items-center justify-center">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>

                    : children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;