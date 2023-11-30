import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => { 
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');

    const onEmailChange = (e) =>{
        setLoginEmail(e.target.value);
    }

    const onPasswordChange = (e) =>{
        setLoginPassword(e.target.value);
    }

    const onSubmitClick = () =>(
        alert(`logging in ${loginEmail} with password ${loginPassword}`)
    )
  return (
    <div className="flex justify-center items-center h-screen">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
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
          placeholder="Password"
          name="password"
          onChange={onPasswordChange}
        />
      </div>
      <div className="mb-6 flex flex-row items-center space-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
          type="button" 
          name="submit"
          onClick={onSubmitClick}
        >
          Login
        </button><h5 className="text-12">Create New One <Link to="/register" className="underline font-bold">Register</Link></h5>
      </div>
    </form>
  </div>
  )
}

export default Login