import React, { useEffect } from "react";
import Navbar from "../components/Navbar";


export const ContactUs = () => {
    useEffect(() => {
        document.title = "Contact Us - Lyceum of Alabang";
    }, []);
  return (
    <div className="bg-[#FFD700] min-h-screen flex flex-col items-center justify-center">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="bg-[#003366] text-white rounded-lg shadow-lg px-10 py-12 w-11/12 md:w-3/4 lg:w-1/2 mt-20 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-wider">Contact Us</h1>
        
        {/* Address */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Visit Us At:</h2>
          <p className="text-md mt-1">Km. 30 National Road, Tunasan, Muntinlupa</p>
        </div>

        {/* Contact Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Get In Touch</h2>
          <p className="mt-1">📧 Email: <a href="mailto:Loa.fb2020@gmail.com" className="text-[#FFD700] hover:underline">Loa.fb2020@gmail.com</a></p>
          <p className="mt-1">🌐 Website: <a href="https://lyceumalabang.edu.ph" className="text-[#FFD700] hover:underline">lyceumalabang.edu.ph</a></p>
          <p className="mt-1">📞 Contact No: (02) 88569323 | 09214957685</p>
        </div>

        {/* Social Media */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-[#FFD700] transition">Twitter</a>
            <a href="#" className="hover:text-[#FFD700] transition">Facebook</a>
            <a href="#" className="hover:text-[#FFD700] transition">Instagram</a>
            <a href="#" className="hover:text-[#FFD700] transition">LinkedIn</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Send Us a Message</h2>
          <form className="mt-4 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none" />
            <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none"></textarea>
            <button type="submit" className="w-full bg-[#FFD700] text-[#003366] font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
