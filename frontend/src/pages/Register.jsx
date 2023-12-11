import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Register = () => {
    const navigate = useNavigate();
    const {user,handleUserRegister} = useAuth()
    const [form, setForm] = useState(initialState)
    const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value});
    }
    useEffect(()=> {
        if(user){
            navigate('/');
        }
    },)
    const handleSubmit = (e) => handleUserRegister(e,form);    
    return (
        <div className="flex items-center justify-center h-screen bg mt-o">
            <div className="bg-blue-500 bg-opacity-25 px-6 py-4 rounded shadow-lg w-96">
                    <div className="flex items-center justify-center">
                        <p className="text-2xl font-bold mb-2">Register</p>
                    </div>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="fullName" className="block text-sm font-semibold text-white-600">Full Name</label>
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-2 mt-1 border rounded-md text-black focus:outline-none focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-semibold text-white-600">Username</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                className="w-full px-4 py-2 mt-1 border rounded-md text-black focus:outline-none focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-white-600">Phone Number</label>
                            <input
                                name="phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                                className="w-full px-4 py-2 mt-1 border rounded-md text-black focus:outline-none focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="avatarURL" className="block text-sm font-semibold text-white-600">Avatar URL</label>
                            <input
                                name="avatarURL"
                                type="text"
                                placeholder="Avatar URL"
                                className="w-full px-4 py-2 mt-1 border rounded-md text-black focus:outline-none focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-semibold text-white-600">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-1 border rounded-md text-black focus:outline-none focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white-600">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 mt-1 border rounded-md text-black focus:outline-none focus:border-blue-500"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <button
                                onClick={handleSubmit}
                                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>Already have an account? <span className="text-blue-500"><Link to="/login">Login</Link></span></p>
                    </div>
                </div>
            </div>
    );
};


export default Register;