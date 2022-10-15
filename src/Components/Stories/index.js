import React from "react";
import Img1 from "../../Assets/Images/stories/storyimg1.svg";
import Img2 from "../../Assets/Images/stories/storyimg2.svg";
import Img3 from "../../Assets/Images/stories/storyimg3.svg";
import Img4 from "../../Assets/Images/stories/storyimg4.svg";
import Img5 from "../../Assets/Images/stories/storyimg5.svg";
import Img6 from "../../Assets/Images/stories/storyimg6.svg";
import Img7 from "../../Assets/Images/stories/storyimg7.svg";
import Img8 from "../../Assets/Images/stories/storyimg8.svg";
import Img9 from "../../Assets/Images/stories/storyimg9.svg";
import Img10 from "../../Assets/Images/stories/storyimg10.svg";
import Img11 from "../../Assets/Images/stories/storyimg11.svg";
import Img12 from "../../Assets/Images/stories/storyimg12.svg";
import Add from '../../Assets/Icons/add.svg';
import "./style.css";

export default function Stories() {
  return (
    <div className="stories_container">
      <p className="stories_header">Stories</p>
      <div className="stories_array d-flex flex-row">
        <span>
          <img src={Img1} alt="story" />
          <img src={Add} alt="add" className="add_icon"/>
        </span>
        <img src={Img2} alt="story" />
        <img src={Img3} alt="story" />
        <img src={Img4} alt="story" />
        <img src={Img5} alt="story" />
        <img src={Img6} alt="story" />
        <img src={Img7} alt="story" />
        <img src={Img8} alt="story" />
        <img src={Img9} alt="story" />
        <img src={Img10} alt="story" />
        <img src={Img11} alt="story" />
        <img src={Img12} alt="story" />
      </div>
    </div>
  );
}
