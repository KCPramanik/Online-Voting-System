
import React from "react";
import eciLogo from "../../assets/image/ECOI.png"; // make sure image path is correct
import AshokaChakra from "../../assets/image/aschk.png"; // make sure image path is correct
import ImageSlider from '../../Component/ImageSlider.jsx';
import aecoi from '../../assets/image/aecoi.jpg'
import img3 from '../../assets/image/image-3.jpg'


function Home() {
    const openVoterPanel = () => {
        window.open("/voter-panel", "_blank");
    };

    const openAdminPanel = () => {
        window.open("/admin-login", "_blank");
    };

    return (
        <div className="bg-cyan-950 text-white min-h-screen font-sans">
            {/* Header */}
            <header className="flex items-center justify-between p-4 px-20 border-b border-gray-700 sticky top-0 z-50"
                style={{
                    background: "linear-gradient(to right, #FF9933, white, #138808)",
                }}>
                <div className="flex items-center gap-4 text-black">
                    <img src={eciLogo} alt="ECI Logo" className="w-30 h-30" />
                    <div className="ms-0">
                        <h1 className="text-xl py-3 font-semibold">Election Commission of India</h1>
                        <h2 className="text-xl">भारत निर्वाचन आयोग</h2>
                    </div>
                </div>
                <div>
                    <img src={AshokaChakra} alt="AshokaChakra" className="w-30 h-30 spin-chakra" />
                </div>
                <nav className="flex gap-20 text-black">
                    <a href="#home" className="hover:text-pink-600 text-xl">Home</a>
                    <a href="#about" className="hover:text-pink-600 text-xl">About</a>
                    <a href="#service" className="hover:text-pink-600 text-xl">Service</a>
                </nav>
            </header>

            {/* Hero Section */}
            <main id="home" className="p-6 scroll-mt-28"
                style={{
                    background: "linear-gradient(to bottom, #FF9933, white, #138808)",
                }}>

                <div>
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
                            <div className="flex gap-10">
                                <button
                                    onClick={openVoterPanel}
                                    class="relative inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600  shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden"
                                >
                                    <span class="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                                    <span class="relative z-10 text-lg font-semibold tracking-wide">Click To Vote</span>
                                </button>
                                <button
                                    onClick={openAdminPanel}
                                    class="relative inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out group overflow-hidden"
                                >
                                    <span class="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-white opacity-10 group-hover:h-full"></span>
                                    <span class="relative z-10 text-lg font-semibold tracking-wide">Click only Election Commissioners</span>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 1 */}
                <section id="about" className="grid md:grid-cols-2 gap-6 mb-16 scroll-mt-50 text-black">

                    <div>
                        <h2 className="text-3xl font-semibold mb-2 ">About Election Commission of India</h2>
                        <p>
                            The Election Commission of India (ECI) is an autonomous constitutional authority established on January 25, 1950,
                            responsible for conducting free and fair elections in India. It plays a crucial role in strengthening democracy by
                            ensuring impartial and transparent electoral processes for the Lok Sabha, Rajya Sabha, State Legislative Assemblies,
                            and the offices of the President and Vice-President. The Commission is composed of the Chief Election Commissioner
                            and two Election Commissioners, who oversee all aspects of the electoral process including the implementation of
                            the Model Code of Conduct, monitoring political campaigns, and regulating election expenses.
                            <br /><br />
                            The ECI has contributed significantly to upholding democratic values in the world's largest democracy.
                        </p>
                    </div>
                    <div className="h-70 bg-gray-800 flex justify-center items-center text-gray-400 border border-gray-600">
                        <img className="h-70 w-full" src={aecoi} alt="image not found" />
                    </div>
                </section>

                {/* Section 2 */}
                <section className="grid md:grid-cols-2 gap-6 mb-16 scroll-mt-24 text-black">
                    <div>
                        <h3 className="text-3xl font-semibold mb-2">About Online Election System</h3>
                        <p>
                            The Online Election System in India is an emerging concept aimed at
                            making the voting process more accessible, secure, and convenient
                            for citizens, especially those living away from their home constituencies.
                            Although India currently does not have a fully online voting system for
                            the general public, the Election Commission of India has explored options like Remote Voting using
                            Blockchain Technology and postal ballots for service voters. These developments aim to increase voter turnout and ensure inclusiveness in the democratic process. However, implementing a nationwide
                            online voting system comes with challenges such as ensuring data security, voter authentication, and preventing electoral fraud.
                            <br /><br />
                            These systems provide solutions such as secure digital identity, remote voting, and fraud prevention mechanisms.
                        </p>
                    </div>
                    <div className="h-70 bg-gray-800 flex justify-center items-center text-gray-400 border border-gray-600">
                        <img className="h-70 w-full" src={img3} alt="image not found" />
                    </div>
                </section>

                {/* Section 3 */}
                <section id="service" className="scroll-mt-24">

                    <div>
                        <h3 className="text-4xl font-semibold mb-10 text-black">Service of Online Election System</h3>
                        <p className="text-xl">
                            Online Voting System Services are digital platforms designed to facilitate secure, remote, and
                            efficient voting for eligible voters. These services typically offer features like voter authentication,
                            encrypted voting, result computation, and audit trails to ensure transparency and trust. They can be used
                            in various elections such as student elections, corporate elections, housing societies, and political party
                            internal voting. In India, the Election Commission has proposed pilot services using technologies like
                            blockchain-based remote voting, particularly to help migrant workers and NRIs vote from distant locations.
                            While these services are not yet used in public elections, they hold great potential for the future.
                            <br /><br />
                            The Election Commission has proposed such services especially for migrant workers and NRIs.
                        </p>
                    </div>
                </section>
            </main>
        </div >
    );
}

export default Home;

