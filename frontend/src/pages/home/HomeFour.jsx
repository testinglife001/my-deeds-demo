import React from "react";
import { BrowserRouter } from "react-browser-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../components/homefour/styles.css";
import Header from "../../components/homefour/Header";
import Navbar from "../../components/homefour/Navbar";
import Slide from "../../components/homefour/Slide";
import LatestTrek from "../../components/homefour/LatestTrek";
import Motivation from "../../components/homefour/Motivation";
import Video from "../../components/homefour/Video";
import Reviews from "../../components/homefour/Reviews";

const HomeFour = () => {
  return (
    <BrowserRouter>
      <div className='app' >
        <Header />
        <Navbar />
        <Slide />
        <LatestTrek />
        <Motivation />
        <Video />
        <Reviews />
        {/* 
        <TestimonialsMultiPage />
        */}
      </div>
    </BrowserRouter>
  )
}

export default HomeFour