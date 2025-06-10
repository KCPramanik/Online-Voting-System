import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eciLogo from "../../assets/image/ECOI.png"; // make sure image path is correct
import AshokaChakra from "../../assets/image/aschk.png"; // make sure image path is correct
import AdminNavBar from '../../Component/AdminNavBar';


function AdminRegister() {

    const [first_name, setFirstName] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email_id, setEmailId] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        if (!first_name.trim()) {
            toast.error("Please enter first name!");
            return;
        }
        if (!last_name.trim()) {
            toast.error("Please enter last name!");
            return;
        }
        if (!phone.trim()) {
            toast.error("Please enter phone number!");
            return;
        }
        if (!address.trim()) {
            toast.error("Please enter address!");
            return;
        }
        if (!email_id.trim()) {
            toast.error("Please enter email id!");
            return;
        }
        if (!password.trim()) {
            toast.error("Please enter password!");
            return;
        }
        try {
            const response = await axios.post('/auth/register', { first_name, middle_name, last_name, phone, address, email_id, password });
            toast.success(response.data.message);
            setFirstName('');
            setMiddleName('');
            setLastName('');
            setPhone('');
            setAddress('');
            setEmailId('');
            setPassword('');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message); // show actual backend message
            } else {
                toast.error("Something went wrong while submitting.");
            }
        }
    }

    return (
        <>
            <div className="min-h-screen items-center pb-5 justify-center bg-black "
                style={{
                    background: "linear-gradient(to bottom, #FF9933, white, #138808)",
                }}>
                <header className="flex items-center justify-between p-4 px-5 border-b border-gray-700 sticky mt-0 top-0 z-50"
                    style={{
                        background: "linear-gradient(to right, #FF9933, white, #138808)",
                        boxShadow: "0 20px 20px rgba(0, 0, 0, 0.3)", // optional custom shadow

                    }}>
                    <div className="flex items-center gap-4 text-black">
                        <img src={eciLogo} alt="ECI Logo" className="w-30 h-30" />
                        <div className="ms-0">
                            <h1 className="text-xl py-3 font-semibold">Election Commission of India</h1>
                            <h2 className="text-xl">भारत निर्वाचन आयोग</h2>
                        </div>
                    </div>
                    <div>
                        <img src={AshokaChakra} alt="AshokaChakra" className="w-30 h-30 spin-chakra" style={{
                            marginLeft: "160px"
                        }} />
                    </div>
                    <div className='flex gap-0'>

                        <AdminNavBar />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="w-120 mx-auto h-200 my-8 shadow-md p-6 space-y-6 bg-black/80 backdrop-blur-md">

                    <h2 className="text-3xl font-bold text-center text-white">Commissioner  Register</h2>

                    <div className="flex flex-col text-white">
                        <label htmlFor="first-name" className=" block font-medium mb-1">First Name</label>
                        <input
                            id="first-name"
                            type="text"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your First Name.."
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <div className="flex flex-col text-white">
                        <label htmlFor="middle-name" className="block font-medium mb-1">Middle Name</label>
                        <input
                            id="middle-name"
                            type="text"
                            value={middle_name}
                            onChange={(e) => setMiddleName(e.target.value)}
                            placeholder="Enter your Middle Name.."
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <div className="flex flex-col text-white">
                        <label htmlFor="last-name" className="block font-medium mb-1">Last Name</label>
                        <input
                            id="last-name"
                            type="text"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your Last Name.."
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <div className="flex flex-col text-white">
                        <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
                        <input
                            id="phone"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your Phone Number.."
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <div className="flex flex-col text-white">
                        <label htmlFor="address" className="block font-medium mb-1">Address</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your Address.."
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <div className="flex flex-col text-white">
                        <label htmlFor="email" className="block font-medium mb-1">Email-Id</label>
                        <input
                            id="email"
                            type="email"
                            value={email_id}
                            onChange={(e) => setEmailId(e.target.value)}
                            placeholder="Enter your Email Id.."
                            className="w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"

                        />
                    </div>

                    <div className="flex flex-col text-white">
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your Password.."
                            className=" w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleSubmit}
                            className="w-100 relative inline-flex p-4 items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden rounded-xl"
                        >
                            <span className="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                            <span className="relative z-10 text-lg font-semibold tracking-wide">Click to Submit</span>

                        </button>
                    </div>
                </form>


                <ToastContainer position="bottom-right" autoClose={5000} />

            </div>
        </>
    )
}
export default AdminRegister