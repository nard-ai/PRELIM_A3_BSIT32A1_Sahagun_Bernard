import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

export const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us - Lyceum of Alabang";
    }, []);

    return (
        <div className="relative bg-white min-h-screen text-black">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center text-center mt-20 px-6">
                <p className="uppercase text-sm tracking-widest text-[#FFD700] font-semibold">About Us</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 text-[#003366]">
                    Empowering Minds, <br />
                    Shaping the Future
                </h1>
                <p className="max-w-2xl mt-4 text-gray-700">
                    <span className="font-semibold text-[#003366]">Lyceum of Alabang</span> is a prestigious institution dedicated to 
                    academic excellence and innovation. We provide top-quality education, fostering leadership, creativity, 
                    and critical thinking. With **state-of-the-art facilities, expert faculty, and a student-focused approach**, 
                    we prepare future professionals and leaders.
                </p>

                {/* Call to Action Button */}
                <button className="mt-6 px-6 py-3 bg-[#003366] text-[#FFD700] font-semibold rounded-full shadow-lg hover:bg-[#002855] transition">
                    Explore Our <span className="text-white">Programs</span>
                </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-40 left-10 text-[#FFD700] text-xl transform rotate-[-15deg]">
                <span className="font-handwriting">Discover Excellence</span> ➜
            </div>

            {/* Skewed Blue Section at the Bottom */}
            <div className="absolute bottom-0 w-full bg-[#003366] text-white py-10 transform -skew-y-6">
                <div className="skew-y-6 text-center text-4xl font-bold text-[#FFD700]">
                    A Tradition of Academic Excellence
                </div>
                {/* Graffiti-style text */}
                <div className="absolute bottom-4 right-6 text-[#FFD700] text-3xl font-handwriting">
                    Future <br /> Leaders
                </div>
            </div>

            {/* Vertical Sidebar Text */}
            <div className="absolute left-2 top-1/2 -rotate-90 origin-left text-xs tracking-widest uppercase text-[#003366] font-semibold">
                ABOUT US
            </div>
        </div>
    );
};

export default AboutUs;
