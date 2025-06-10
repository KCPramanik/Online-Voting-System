
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bjpLogo from '../../assets/party-logo/BJP.png';
import tmcLogo from '../../assets/party-logo/TMC.svg';
import cpimLogo from '../../assets/party-logo/CPIM.png';
import bspLogo from '../../assets/party-logo/BSP.png';

function CreateVote() {
    const [name, setName] = useState('');
    const [vote, setVote] = useState('');
    const [voter_id, setVoter_id] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        setVote(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error("Please enter your name");
            return;
        }

        if (!voter_id.trim()) {
            toast.error("Please enter your voter ID");
            return;
        }

        if (!vote) {
            toast.error("Please select a party to vote");
            return;
        }

        try {
            const response = await axios.post('/api/create/vote', { name, vote, voter_id });
            // toast.success(response.data.message);
            setShowModal(true);
            // setName('');
            // setVoter_id('');
            // setVote('');
        } catch (error) {
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong while submitting.");
            }
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                background: "linear-gradient(to bottom, #FF9933, white, #138808)"
            }}
        >
            <div className="bg-white/40 p-8 rounded-xl shadow-lg w-full max-w-xl border-4 border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b pb-2 border-orange-300">
                    Cast Your Vote
                </h2>

                <div className="mb-4">
                    <label htmlFor="candidate-name" className="block text-gray-700 font-semibold mb-1">
                        Candidate Name
                    </label>
                    <input
                        id="candidate-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="voter-id" className="block text-gray-700 font-semibold mb-1">
                        Candidate Voter ID
                    </label>
                    <input
                        id="voter-id"
                        type="text"
                        value={voter_id}
                        onChange={(e) => setVoter_id(e.target.value)}
                        placeholder="Enter your Voter ID..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                    />
                </div>

                <form onSubmit={handleSubmit} className="mb-4">
                    <p className="font-semibold mb-2 text-gray-700">Select Your Party:</p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "BJP", color: "bg-orange-500", logo: bjpLogo },
                            { name: "TMC", color: "bg-green-600", logo: tmcLogo },
                            { name: "CPIM", color: "bg-red-600", logo: cpimLogo },
                            { name: "BSP", color: "bg-blue-700", logo: bspLogo },
                        ].map((party) => (
                            <label
                                key={party.name}
                                className={`cursor-pointer flex items-center justify-between px-4 py-3 text-white font-semibold rounded-xl ${party.color} transition transform hover:scale-105`}
                            >
                                <div className="flex items-center gap-3">
                                    <img src={party.logo} alt={`${party.name} logo`} className="w-8 h-8 rounded-full border border-white bg-white" />
                                    <span>{party.name}</span>
                                </div>
                                {/* Custom radio circle */}
                                <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                                    {vote === party.name && (
                                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                                    )}
                                </div>
                                <input
                                    type="radio"
                                    name="partie"
                                    value={party.name}
                                    checked={vote === party.name}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                            </label>
                        ))}
                    </div>

                    <div className="flex mt-10 justify-center">
                        <button
                            onClick={handleSubmit}
                            className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden rounded-xl w-full"
                        >
                            <span className="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                            <span className="relative z-10 text-lg font-semibold tracking-wide text-center w-full">
                                Submit Vote
                            </span>
                        </button>
                    </div>
                </form>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm w-full">
                            <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Vote Submitted!</h2>
                            <p className="text-gray-700 mb-2">Thank you for casting your vote.</p>

                            <div className="flex items-center justify-center gap-3 mb-6">
                                {/* Dynamically show the selected party's logo and name */}
                                {vote === "BJP" && <img src={bjpLogo} alt="BJP" className="w-8 h-8" />}
                                {vote === "TMC" && <img src={tmcLogo} alt="TMC" className="w-8 h-8" />}
                                {vote === "CPIM" && <img src={cpimLogo} alt="CPIM" className="w-8 h-8" />}
                                {vote === "BSP" && <img src={bspLogo} alt="BSP" className="w-8 h-8" />}

                                <p className="text-lg font-bold text-purple-700">{vote}</p>
                            </div>

                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setName('');
                                    setVoter_id('');
                                    setVote('');
                                }}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}


                <p className="text-center text-xl text-black mt-4">
                    Your vote is confidential and will be counted securely.
                </p>
            </div>

            <ToastContainer position="top-center" autoClose={5000} />
        </div>
    );
}

export default CreateVote;
