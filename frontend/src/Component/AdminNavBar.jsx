import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavBar() {
    return (
        <nav className="py-3 font-bold text-sm">
            <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
                <Link to="/admin-register">
                    <button className='bg-cyan-400 px-3 py-2 rounded-2xl text-black hover:bg-blue-500 hover:text-amber-50 transition duration-300 cursor-pointer'> Register Commissioner </button>
                </Link>
                <Link to="/register-candidate">
                    <button className='bg-cyan-400 px-3 py-2 rounded-2xl text-black hover:bg-blue-500 hover:text-amber-50 transition duration-300 cursor-pointer'> Register Voter Candidate </button>
                </Link>
                <Link to="/filter-ballot-box">
                    <button className='bg-cyan-400 px-3 py-2 rounded-2xl text-black hover:bg-blue-500 hover:text-amber-50 transition duration-300 cursor-pointer'> Show Voting Results </button>

                </Link>
                <Link to="/admin-logout">
                    <button className='bg-cyan-400 px-3 py-2 rounded-2xl text-black hover:bg-blue-500 hover:text-amber-50 transition duration-300 cursor-pointer'> Logout </button>

                </Link>
            </div>
        </nav>
    );
}

export default AdminNavBar;

