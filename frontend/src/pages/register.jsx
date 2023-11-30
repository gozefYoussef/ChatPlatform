import { useState } from "react";
import { Link } from "react-router-dom"
import {httpRegisterRequest} from '../Hooks/request'

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword,setRegisterPassword] = useState('');

    const onEmailChange = (e) =>{setRegisterEmail(e.target.value);}
    const onPasswordChange = (e) =>{setRegisterPassword(e.target.value);}
    const onSubmitClick = () =>(httpRegisterRequest(registerEmail,registerPassword))
  return (
  <div className="flex justify-center items-center h-screen">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          placeholder="Username or Email Address"
          onChange={onEmailChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onPasswordChange}
        />
      </div>
      <div className="mb-6 flex flex-row items-center space-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
          type="button" 
          onClick={onSubmitClick}
        >
          Register
        </button><h5 className="text-12">have an account <Link to="/login" className="underline font-bold">Login</Link></h5>
      </div>
    </form>
  </div>
  )
}

export default Register