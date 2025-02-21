import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/lyceum.png"; // Ensure this path is correct
import homeIcon from "../assets/home.png"; // Icon for Home
import aboutIcon from "../assets/about.png"; // Icon for About Us
import contactIcon from "../assets/contact.png"; // Icon for Contact Us

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-gray-800 h-16 flex items-center w-full shadow-md transition-transform duration-300"
      initial={{ opacity: 0, y: -20 }}  // Start with 0 opacity and move up slightly
      animate={{ opacity: 1, y: 0 }}  // Fade in and slide down
      transition={{ duration: 1 }}  // 1-second smooth animation
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex flex-col items-start"> 
          <Link to="/">
            <img className="h-10 w-auto" src={logo} alt="Lyceum of Alabang Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
        <img src={homeIcon} alt="Home Icon" className="h-5 w-5" />
          <Link to="/" className="text-gray-300 hover:text-white text-md transition-colors duration-300">
            Home
          </Link>
          <img src={aboutIcon} alt="About Icon" className="h-5 w-5" />
          <Link to="/about-us" className="text-gray-300 hover:text-white text-md transition-colors duration-300">
            About Us
          </Link>
          <img src={contactIcon} alt="Contact Icon" className="h-5 w-5" />
          <Link to="/contact-us" className="text-gray-300 hover:text-white text-md transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
