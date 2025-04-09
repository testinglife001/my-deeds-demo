import React from "react";
import self from "./data/self.jpg";
import "./motivation.css";

function Motivation() {
  return (
    <section className="motivatinal">
      <h1 align="center">Why do people trek?</h1>
      <p>
        I have been asked many a times about why do people trek. “What is the
        point of struggling to get all the way to the top of the mountain,
        carrying a heavy load, while almost always, a vehicle can take you to
        the top?” Even though I’m a trekker myself, this question always baffles
        me. So, I spoke to a few trekkers and read a lot about it. So here are
        my thoughts summed up into an article.
      </p>
      <div className="motivation row">
        <div className="motivation_image_block col-lg-6 info-left text-center">
          <img
            src={self}
            className="motivation_img img-fluid"
            alt="not added"
          />
        </div>
        <div className="motivationOfTrek col-lg-6 info-right">
          <div className="Motivation_lines">
            <h1><img src="https://img.icons8.com/ios/52/000000/climbing.png"/>Explore the Unexplored</h1>
            <p>
              Don’t you feel your mind screaming out sometimes to give it a
              break? Sometimes, it just gets too overloaded with worries about
              work, commute, EMIs, family, health, children’s school, repairs,
              and what not! Just a walk in the hills relaxes the mind. Time and
              again, it has been proven that nature is a great stress-buster. It
              works just like detox, where you free your mind of thoughts.
              Besides, just hiking to get to a beautiful place gives you time
              you sort your thoughts out and put everything into perspective.
            </p>
            <p>
              Fitness doesn’t always come easy. And sometimes, you have to go
              the distance simply to get fit. For a lot of fitness freaks,
              trekking is a great incentive. Why walk on a treadmill when you
              can walk in the mountains? The road to fitness requires a positive
              mindset and a great amount of motivation, both of which trekking
              offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Motivation;
