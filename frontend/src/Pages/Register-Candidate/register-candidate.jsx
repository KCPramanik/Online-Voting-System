import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavBar from '../../Component/AdminNavBar';
import eciLogo from "../../assets/image/ECOI.png"; // make sure image path is correct
import AshokaChakra from "../../assets/image/aschk.png"; // make sure image path is correct

function RegisterCandidate() {

    const token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [voter_id, setVoter_id] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        if (!name.trim()) {
            toast.error("Please enter candidate name");
            return;
        }

        if (!voter_id.trim()) {
            toast.error("Please enter candidate voter id");
            return;
        }

        try {
            const response = await axios.post('/api/register-candidate', { name, voter_id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log("Register response", response); // <-- check this
            toast.success(response.data.message);       // <-- backend success message
            setName('');
            setVoter_id('');
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
            <div className="min-h-screen h-screen overflow-hidden bg-cyan-950 text-white font-sans"
                style={{
                    background: "linear-gradient(to bottom, #FF9933, white, #138808)",
                }}>
                <header className="flex items-center justify-between p-4 px-5 border-b border-gray-700 sticky top-0 z-50"
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
                <div className="flex justify-center items-center min-h-[calc(100vh-100px)] relative">
                    {/* 🔄 Background Rotating Ashoka Chakra */}
                    <img
                        src={AshokaChakra}
                        alt="Ashoka Chakra"
                        className="absolute w-400 h-400 opacity-10 spin-chakrab"

                    />
                    <div className="bg-black/80 backdrop-blur-md shadow-2xl p-8 w-full max-w-md rounded-xl">
                        <h2 className="text-3xl font-bold text-center mb-6 text-white">
                            Register a Candidate
                        </h2>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-xl font-medium mb-1 text-white">
                                Candidate Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter candidate name.."
                                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="voter-id" className="block text-xl font-medium mb-1 text-white">
                                Candidate Voter ID
                            </label>
                            <input
                                id="voter-id"
                                type="text"
                                value={voter_id}
                                onChange={(e) => setVoter_id(e.target.value)}
                                placeholder="Enter candidate voter id.."
                                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={handleSubmit}
                                className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden rounded-xl w-full"
                            >
                                <span className="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                                <span className="relative z-10 text-lg font-semibold tracking-wide text-center w-full">
                                    Register Candidate
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={5000} />

        </>
    )
}
export default RegisterCandidate