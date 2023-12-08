import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const initialState = {
    username: '',
    password: '',
}

const Login = () => {
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(user){
            navigate('/');
        }
    },[])
    const [form, setForm] = useState(initialState)
    const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
    };

  return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-200 p-8 rounded shadow-md w-96">
                <p className="text-2xl font-bold mb-4">Login</p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-semibold text-gray-600">Username</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <button
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="text-sm text-center">
                    <p>Dont have an account? <span className="text-blue-500"><Link to="/register">Register</Link></span></p>
                </div>
            </div>
        </div>
    );
}

export default Login