import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavBar from './AdminNavBar';
import eciLogo from "../assets/image/ECOI.png"; // make sure image path is correct
import AshokaChakra from "../assets/image/aschk.png"; // make sure image path is correct

function AdminLogOut() {

    const handleLogout = () => {
        localStorage.removeItem('token'); // remove the JWT
        window.location.href = '/login';  // or use navigate('/login') if using React Router
        toast.success("Successfully Log Out");
    };
    return (
        <>
            <div className='min-h-screen h-screen overflow-hidden items-center justify-center bg-black relative'
                style={{
                    background: "linear-gradient(to bottom, #FF9933, white, #138808)",
                }}>
                <img
                    src={AshokaChakra}
                    alt="Ashoka Chakra"
                    className="absolute w-400 opacity-10 spin-chakrab"
                />

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
                <div className="flex flex-col items-center justify-center mt-15 mb-20 space-y-6">
                    <h2 className="text-4xl font-bold text-center text-black">
                        Are You Sure You Want to Logout?
                    </h2>
                    <button
                        onClick={handleLogout}
                        className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden rounded-xl w-full max-w-xs"
                    >
                        <span className="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                        <span className="relative z-10 text-lg font-semibold tracking-wide text-center w-full">
                            Click Here to LogOut
                        </span>
                    </button>
                </div>

                <ToastContainer position="top-center" autoClose={5000} />
            </div>

        </>
    )
}

export default AdminLogOut