
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavBar from '../../Component/AdminNavBar';
import eciLogo from "../../assets/image/ECOI.png"; // make sure image path is correct
import AshokaChakra from "../../assets/image/aschk.png"; // make sure image path is correct

function FilterBallotBox() {
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleShowResults = async () => {
        const token = localStorage.getItem('token'); // ✅ Get the token when the button is clicked
        if (!token) {
            toast.error("Unauthorize Access!");
            return;
        }

        try {
            const response = await axios.get('/api/filter/ballot-box',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // Define all parties you want to always display
            const allParties = ['CPIM', 'BJP', 'TMC', 'BSP'];

            // Create a map from API result for quick lookup
            const resultMap = {};
            response.data.forEach(item => {
                resultMap[item.vote] = item;
            });

            // Merge API result with allParties, adding 0 votes for missing parties
            const completeResults = allParties.map(party => {
                return resultMap[party] || { vote: party, total_votes: 0 };
            });

            // Check if all votes are zero, and handle empty data accordingly
            const totalVotesSum = completeResults.reduce((acc, cur) => acc + parseInt(cur.total_votes), 0);

            if (totalVotesSum === 0) {
                toast.warning("Sorry, data is empty!");
                setResults(completeResults);
                setShowResults(true); // show 0 vote parties anyway
                return;
            }

            toast.success("Successfully Filter Voting Result");
            setResults(completeResults);
            setShowResults(true);
        }
        catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message); // show actual backend message
            } else {
                toast.error("Something went wrong while submitting.");
            }
        }
    };

    return (
        <>
            {/* <AdminNavBar /> */}
            <div className='min-h-screen h-screen overflow-hidden items-center justify-center bg-black relative'
                style={{
                    background: "linear-gradient(to bottom, #FF9933, white, #138808)",
                }}>
                <img
                    src={AshokaChakra}
                    alt="Ashoka Chakra"
                    className="absolute w-400 opacity-10 spin-chakrab"
                />
                <header className="flex items-center justify-between p-4 px-5 border-b border-gray-700 shadow-lg sticky top-0 z-50"
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
                <div>
                    <div className="flex justify-center items-center mt-15 mb-20">
                        <button
                            onClick={handleShowResults}
                            className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden rounded-xl w-full max-w-xs"
                        >
                            <span className="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                            <span className="relative z-10 text-lg font-semibold tracking-wide text-center w-full">
                                Click to Show Voting Result
                            </span>
                        </button>
                    </div>

                    {showResults && (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                            {[...results].sort((a, b) => b.total_votes - a.total_votes).map((item, index) => {
                                const totalVotesSum = results.reduce((a, b) => a + parseInt(b.total_votes), 0);
                                const percent = totalVotesSum > 0
                                    ? ((item.total_votes / totalVotesSum) * 100).toFixed(1)
                                    : 0;

                                // Party color mapping
                                let bgColor;
                                switch (item.vote) {
                                    case 'CPIM': bgColor = 'red'; break;
                                    case 'BJP': bgColor = 'orange'; break;
                                    case 'TMC': bgColor = 'green'; break;
                                    case 'BSP': bgColor = 'blue'; break;
                                    default: bgColor = 'purple';
                                }

                                return (
                                    <div key={index} style={{
                                        backgroundColor: bgColor,
                                        color: 'white',
                                        padding: '20px',
                                        borderRadius: '10px',
                                        textAlign: 'center',
                                        width: '200px'
                                    }}>
                                        <h3>{item.vote}</h3>
                                        <h2>{percent}%</h2>
                                        <p>{item.total_votes} votes</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                <ToastContainer position="bottom-right" autoClose={5000} />
            </div>
        </>
    );
}

export default FilterBallotBox;
