import React from "react";
import trek_video from "./data/vid-20190623-065838_L7nqjgDi.compressed.mp4";
import { Player, ControlBar, PlayToggle } from "video-react";
// import "../node_modules/video-react/dist/video-react.css"; // import css
import "./video.css";

function Video() {
  return (
    <section id="video" className="video">
      <div className="video_heading">
        <h1><img src="https://img.icons8.com/bubbles/40/000000/alps.png"/><span className="memo">MEMORABLE</span> EXPERIENCE</h1>
      </div>
      <div className="video_player">
        <Player
          autoPlay
          src={trek_video}
          fluid={false}
          width={1350}
          height={400}
        >
          <ControlBar autoHide={false} disableDefaultControls={true}>
            <PlayToggle />
          </ControlBar>
        </Player>
      </div>
    </section>
  );
}
export default Video;
