import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AshokaChakra from "../../assets/image/aschk.png"; // make sure image path is correct

function AdminLogin() {

    const [email_id, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        if (!email_id.trim()) {
            toast.error("Please enter your email-id");
            return;
        }

        if (!password.trim()) {
            toast.error("Please enter your Password");
            return;
        }
        try {
            const res = await axios.post('/auth/login', { email_id, password });

            const token = res.data.token;
            // ✅ Store token in sessionStorage
            localStorage.setItem('token', token);

            window.location.href = '/admin-panel'
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                toast.error(error.response.data.error); // show actual backend message
            } else {
                toast.error("Something went wrong while submitting.");
            }
        }

    }

    return (
        <>
            <div className="min-h-screen h-screen overflow-hidden flex items-center justify-center bg-black relative"
                style={{
                    background: "linear-gradient(to bottom, #FF9933, white, #138808)",
                }}>
                <img
                    src={AshokaChakra}
                    alt="Ashoka Chakra"
                    className="absolute w-400 opacity-10 spin-chakrab"
                />
                <div className="bg-black/60 backdrop-blur-md shadow-2xl p-8 w-full max-w-md ">

                    <h2 className="text-3xl font-bold text-center mb-6">
                        Login Election Commissioners
                    </h2>

                    <div className="mb-4">
                        <label htmlFor="email-id" className="block text-xl font-medium mb-1">
                            Email - Id
                        </label>
                        <input
                            id="email-id"
                            type="email"
                            value={email_id}
                            onChange={(e) => setEmailId(e.target.value)}
                            placeholder="Enter your Email Id.."
                            className="w-full px-4 py-2 text-xl border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-xl font-medium mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your Password.."
                            className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden rounded-xl w-full"
                        >
                            <span className="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                            <span className="relative z-10 text-lg font-semibold tracking-wide text-center w-full">Click to Login</span>
                        </button>
                    </div>
                    <ToastContainer position="top-center" autoClose={5000} style={{ marginTop: "-100px" }} />
                </div>
            </div>
        </>

    )
}
export default AdminLogin

