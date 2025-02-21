import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";

export const Home = () => {
        useEffect(() => {
            document.title = "Home";
        }, []);
  return (
    <div className="bg-black">
      <Navbar /> 
      <ImageSlider />
    </div>
  );
};
