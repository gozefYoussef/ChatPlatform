import { useState } from "react";

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
    }

    return(
        <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center items-center text-{24} font-bold"><h2 className="text-2xl font-bold mb-6">{isSignIn ? "Register" : "Login"}</h2></div>
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
            <p className="text-12">{isSignIn ? 'Already have account ' : 'create an account '}<span onClick={switchMode} className="font-bold text-{12} cursor-pointer">{isSignIn ? 'Login' : 'Register'}</span></p>
          </div>
        </form>
      </div>
    )
    
}