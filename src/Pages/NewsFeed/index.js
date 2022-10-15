import React from "react";
import Feed from "../../Components/Feed";
import FeadHeader from "../../Components/FeedHeader";
import SideBar from "../../Components/SideBar";
import Stories from "../../Components/Stories";
import "./style.css";

export default function NewsFeed({ children }) {
  return (
    <div className="feed_container">
      <FeadHeader />
      <main className="d-flex">
        <section className="side_wrapper">
          <SideBar />
        </section>
        <section className="main_wrapper">{children}</section>
      </main>
    </div>
  );
}
