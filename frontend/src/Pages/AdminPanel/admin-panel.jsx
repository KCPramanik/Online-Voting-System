import React from 'react';
import AdminNavBar from '../../Component/AdminNavBar';
import eciLogo from "../../assets/image/ECOI.png"; // make sure image path is correct
import AshokaChakra from "../../assets/image/aschk.png"; // make sure image path is correct
import ImageSlider from '../../Component/ImageSlider.jsx';

function AdminPanel() {
  return (
    <>
      <div className="bg-cyan-950 text-white min-h-screen font-sans"
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

        {/* ✅ Page content below */}
        <div id='home'>
          <h1 className="text-5xl text-center text-black font-bold mt-7 mb-15">Welcome To Online Election System</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-37 mx-10 items-center">
            <div className="h-100 bg-gray-800 flex justify-center items-center text-gray-400 border border-gray-600">
              <ImageSlider />
            </div>
            <div className="ms-17">
              <p className="mb-20 text-2xl text-black">
                The Online Election System in India is an emerging concept aimed at making the
                voting process more accessible, secure, and convenient for citizens, especially
                those living away from their home constituencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
