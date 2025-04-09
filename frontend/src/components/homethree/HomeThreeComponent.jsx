import React from "react";
import GetAllBlogs from "./GetAllBlogs";
import Hero from "./Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HomeThreeComponent() {
  return (
    <>
      <Navbar />
      <Hero />

      <h1 className="text-center py-4 fs-2 fw-light text-decoration-underline text-primary">
        Trending Articles
      </h1>

      <div className="mt-4 container">
        <GetAllBlogs />
      </div>

      <Footer />
    </>
  );
}

export default HomeThreeComponent;
