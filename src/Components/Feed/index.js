import React from "react";
import { Link } from 'react-router-dom';
import Img12 from "../../Assets/Images/stories/storyimg12.svg";
import Img4 from "../../Assets/Images/stories/storyimg4.svg";
import FeedPost from "../../Assets/Images/feed/feedpost.svg";
import FeedPost2 from "../../Assets/Images/feed/feedpost2.svg";
import FeedPost3 from "../../Assets/Images/feed/feedpost3.svg";
import pharm from "../../Assets/Images/pharms/profileimg1.svg";
import "./style.css";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

export default function Feed() {
  return (
    <div className="feed_post_container">
      <div className="feed">
        <div className="feed_profile d-flex align-items-center">
          <Link to="/doctor_profile">
            <img src={Img12} alt="profile" />
          </Link>
          <Link to="/doctor_profile">
            <span>Dr Roland Monday</span>
          </Link>
        </div>
        <p className="feed_text">
          Here are some minor and major symptoms of covid. Save yoursel, Save
          others.
        </p>
        <div className="feed_img">
          <img src={FeedPost} alt="profile" />
        </div>
        <div className="actions text-left">
          <BsHeart />
          <FaRegComment />
          <BsBookmark />
        </div>
      </div>
      <div className="feed">
        <div className="feed_profile d-flex align-items-center">
          <img src={Img4} alt="profile" />
          <span>Dr Mia Albert</span>
        </div>
        <p className="feed_text">
          Stress is somethig that most of us dont take seriously, sadly if not
          well managed can affect our health
        </p>
        <div className="feed_img">
          <img src={FeedPost2} alt="profile" />
        </div>
        <div className="actions text-left">
          <BsHeart />
          <FaRegComment />
          <BsBookmark />
        </div>
      </div>
      <div className="feed">
        <div className="feed_profile d-flex align-items-center">
          <img src={pharm} alt="profile" />
          <span>HealthPlus Pharmacy</span>
        </div>
        <p className="feed_text">Six drugs that supports fertility in women.</p>
        <div className="feed_img">
          <img src={FeedPost3} alt="profile" />
        </div>
        <div className="actions text-left">
          <BsHeart />
          <FaRegComment />
          <BsBookmark />
        </div>
      </div>
      <div className="feed">
        <div className="feed_profile d-flex align-items-center">
          <img src={Img12} alt="profile" />
          <span>Dr Roland Monday</span>
        </div>
        <p className="feed_text">
          Here are some minor and major symptoms of covid. Save yoursel, Save
          others.
        </p>
        <div className="feed_img">
          <img src={FeedPost} alt="profile" />
        </div>
        <div className="actions text-left">
          <BsHeart />
          <FaRegComment />
          <BsBookmark />
        </div>
      </div>
      <div className="feed">
        <div className="feed_profile d-flex align-items-center">
          <img src={Img12} alt="profile" />
          <span>Dr Roland Monday</span>
        </div>
        <p className="feed_text">
          Here are some minor and major symptoms of covid. Save yoursel, Save
          others.
        </p>
        <div className="feed_img">
          <img src={FeedPost} alt="profile" />
        </div>
        <div className="actions text-left">
          <BsHeart />
          <FaRegComment />
          <BsBookmark />
        </div>
      </div>
    </div>
  );
}
