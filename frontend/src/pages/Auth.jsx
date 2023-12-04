import { useState } from "react";
// import { httpRegisterRequest,httploginRequest } from "../Hooks/request";

const initialState = {
    email: '',
    phone: '',
    username: '',
    avatar: '',
    password: '',
    confirmpassword:'',    
}

export default function Auth(){
    const [isSignIn,setIsSignIn] = useState(false);
    const [form, setForm] = useState(initialState)
    
    const switchMode = () => {
        setIsSignIn(prev => !prev)
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const URL = "http://localhost:8000/auth";
       
        const {email, username, phone, avatar,password,confirmpassword} = form;
       
        fetch(`${URL}/${isSignIn ? 'register' : 'login'}`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email,
            phone,
            username,
            avatar,
            password,
            confirmpassword, 
        })
    })
    }
    return(
        <div className="flex justify-center items-center h-screen bg-slate-500">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4 mx-6 bg-transparent-50">
            <div className="flex justify-center items-center text-{24} font-bold">
                <h2 className="text-2xl font-bold mb-6">{isSignIn ? "Register" : "Login"}</h2>
            </div>
          {isSignIn && 
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
              onChange={handleChange}
              required
            />
          </div>
           }
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>
          {isSignIn && 
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
           }
            {isSignIn && 
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
              Avatar
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avatar"
              type="text"
              name="avatar"
              placeholder="Avatar URL"
              onChange={handleChange}
            />
          </div>
           }
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
              onChange={handleChange}
              required
            />
          </div>
          {isSignIn && 
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
                Confirm Password
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={handleChange}
                required
                />
            </div>
          }
          <div className="mb-6 flex flex-row items-center space-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
              type="button" 
              name="submit"
            >
              {isSignIn ? 'Register' : 'Login'}
            </button>
          </div>
          <p>{isSignIn ? 'Already have account? ' : 'create an account? '}<span onClick={switchMode} className="font-bold text-16 cursor-pointer">{isSignIn ? 'Login' : 'Register'}</span></p>
        </form>
      </div>
    )
    
}