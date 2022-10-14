import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import DocImage from "../../Assets/Images/profileImg.svg";
import FeedPost from "../../Assets/Images/feed/doc_1.svg";
import FeedPost2 from "../../Assets/Images/feed/doc_2.svg";
import FeedPost3 from "../../Assets/Images/feed/doc_3.svg";
import FeedPost4 from "../../Assets/Images/feed/doc_4.svg";
import FeedPost5 from "../../Assets/Images/feed/doc_5.svg";
import FeedPost6 from "../../Assets/Images/feed/doc_6.svg";
import FeedPost7 from "../../Assets/Images/feed/doc_7.svg";
import FeedPost8 from "../../Assets/Images/feed/doc_8.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

export default function Doctor_Profile() {
  return (

    
    <div className="doctor_profile_container">
      <div className="doc_profile d-flex flex-md-row flex-sm-column align-items-start">
        <div className="d-flex flex-sm-column flex-md-row justify-content-sm-center justify-content-lg-start align-items-start w-100">
          <div className="doc_img_container">
            <img src={DocImage} alt="profile_img" />
          </div>
          <div className="d-flex flex-column justify-content-md-start justify-content-sm-center">
            <span className="name">Dr Caleb Moren</span>
            <p className="caption d-flex justify-content-start">
              I use story telling to create a healthier Africa
            </p>
            <div className="doc_profile_actions d-flex">
              <Button
                variant="outline-primary"
                className="follow d-flex justify-content-center align-items-center"
              >
                Follow
              </Button>
              <FontAwesomeIcon icon={faCommentDots} className="doc_chat" />
            </div>
          </div>
        </div>
        <div className="consult_btn_cont d-flex justify-content-md-end justify-content-sm-center w-100">
          <Button className="consult_btn">Book a consultation</Button>
        </div>
      </div>
      <div className="posts_container mt-5">
        <p className="caption" style={{ fontWeight: "bold", textAlign: 'left' }}>
          100 posts
        </p>
        <div className="posts">
          <div className="post">
            <img src={FeedPost} alt="post_1" />
          </div>
          <div className="post">
            <img src={FeedPost2} alt="post_2" />
          </div>
          <div className="post">
            <img src={FeedPost3} alt="post_1" />
          </div>
          <div className="post">
            <img src={FeedPost4} alt="post_2" />
          </div>
          <div className="post">
            <img src={FeedPost5} alt="post_1" />
          </div>
          <div className="post">
            <img src={FeedPost6} alt="post_2" />
          </div>
          <div className="post">
            <img src={FeedPost7} alt="post_1" />
          </div>
          <div className="post">
            <img src={FeedPost8} alt="post_2" />
          </div>
        </div>
      </div>
    </div>
  );
}
