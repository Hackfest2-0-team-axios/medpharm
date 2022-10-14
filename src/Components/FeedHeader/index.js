import React from "react";
import "./style.css";
import SearchIcon from "../../Assets/Icons/search.svg";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faBell } from "@fortawesome/free-regular-svg-icons";

export default function FeadHeader({ type }) {
  return (
    <div className="feed_header_container">
      <div className="logo_container">
        <h3 className="">
          <Link to="/" className="logo">
            MedPharm
          </Link>
        </h3>
      </div>
     {window.location.pathname !== '/appointments' && <div className="header_nav_container d-flex flex-row justify-content-center align-items-center">
        <div className="search_container">
          <span className="d-flex justify-content-center align-items-center">
            <img src={SearchIcon} alt="search" />
          </span>
          <Form.Control type="text" placeholder="Search" id="search" />
        </div>
        <div className="icons_container d-flex flex-row justify-content-end align-items-center">
          <span className="header_icon">
            <FontAwesomeIcon icon={faBell} />
          </span>
          <span className="header_icon">
            <FontAwesomeIcon icon={faCommentDots} />
          </span>
          {(window.location.pathname === '/news_feed') && (type !== 'client' ) ? <span>
            <Button className="header_nav_btn d-flex align-items-center justify-content-center p-3">
              + create a post
            </Button>
          </span> : null}
        </div>
      </div>}
    </div>
  );
}
