import React, { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';



import cloud_mountains from "./data/clouds+mountains.jpg";
import groups from "./data/group.jpg";
import hills from "./data/hills.jpg";
import "./review.css";

function Reviews() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel id="Reviews" className="review"  activeIndex={index} onSelect={handleSelect} pause={true} >
      
      <Carousel.Item>
        <div class="">
        <div className="review_headline"><h1>REVIEWS</h1></div>
        <div className="image_box"><img className="rounded-circle" src={cloud_mountains} alt="Generic placeholder image" width="140" height="140" />
            </div>
            <p className="reviewer_name" >Pranay</p>
            <h2>Velas Turtle Festival</h2>
            <p>We had a wonderful experience with Terks and trails for our Velas Turtle festival tour. Arrangements were good, tour guide was responsible and cooperative. Me and my toddler were quite comfortable for the entire tour.</p>

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="">
          <div className="review_headline"><h1>REVIEWS</h1></div>
          <div className="image_box"><img className="rounded-circle" src={hills} alt="Generic placeholder image" width="140" height="140" />
            </div>
            <p className="reviewer_name" >Pranay</p>
            <h2>Kalsubai Night Trek</h2>
            <p>Hi guys, Posting for may11-12,2019 Kalsubai trek With Affan as trek leader and his assistants. Have to say the trek experience was something out of the world. All the arrangements were spot on and well planned.</p>

         

        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="">
      <div className="review_headline"><h1>REVIEWS</h1></div>
            <div className="image_box"><img className="rounded-circle" src={cloud_mountains} alt="Generic placeholder image" width="140" height="140" />
            </div>
            <p className="reviewer_name" >Pranay</p>
            <h2>Velas Turtle Festival</h2>
            <p>We had a wonderful experience with Terks and trails for our Velas Turtle festival tour. Arrangements were good, tour guide was responsible and cooperative. Me and my toddler were quite comfortable for the entire tour.</p>
            
        </div>
      </Carousel.Item>
    </Carousel>

  );
}

export default Reviews;
