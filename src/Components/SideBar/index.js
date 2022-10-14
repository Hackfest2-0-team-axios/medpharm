import React from "react";
import { NavLink } from "react-router-dom";
import ProfileImg from "../../Assets/Images/profileImg.svg";
import pharm from "../../Assets/Images/pharms/profileimg1.svg";
import ProfileImg2 from "../../Assets/Images/profileImg2.svg";
import Feed from "../../Assets/Icons/feed.svg";
import Pharm from "../../Assets/Icons/pharmacies.svg";
import Apps from "../../Assets/Icons/appoints.svg";
import Cart from "../../Assets/Icons/carts.svg";
import Settings from "../../Assets/Icons/settings.svg";
import Logout from "../../Assets/Icons/logout.svg";
import Upload from "../../Assets/Icons/uploadItem.svg";
import Manage from "../../Assets/Icons/manage.svg";
import Orders from "../../Assets/Icons/orders.svg";
import "./style.css";

export default function SideBar({ type = "client" }) {
  return (
    <div className="sidebar_container">
      <div className="profile p-4">
        <div className="img_container d-flex justify-content-center align-items-center">
          {type === "client" ? (
            <img src={ProfileImg2} alt="Tracy" />
          ) : type === "doctor" ? (
            <img src={ProfileImg} alt="_Dr_Caleb_Morien_img" />
          ) : (
            <img src={pharm} alt="_HealthPlus_Pharmacy_" />
          )}
        </div>
        <div>
          <p className="name text-center">
            {type === "client"
              ? "Tracy Godwin"
              : type === "doctor"
              ? "Dr Caleb Moren"
              : "HealthPlus Pharmacy"}
          </p>
          <p className="caption text-center">
            {type === "client"
              ? "Teacher, Wife, mother of two, lover of God."
              : type === "doctor"
              ? "I use story telling to create a healthier Africa"
              : "Healthplus, Nigeria’s integrated pharmacy and health provider across the country."}
          </p>
        </div>
      </div>
      <div className="">
        <nav className="side_nav d-flex flex-column">
          {type !== "pharmacy" ? (
            <>
              <NavLink to="/news_feed" className="nav_link">
                <img src={Feed} alt="_feed_" />
                <span>Feed</span>
              </NavLink>
              <NavLink to="/pharmacies" className="nav_link">
                <img src={Pharm} alt="_pharmacies_" />
                <span>Pharmacies</span>
              </NavLink>
              <NavLink to="/appointments" className="nav_link">
                <img src={Apps} alt="_appointmens_" />
                <span>Appointments</span>
              </NavLink>
              <NavLink to="/cart" className="nav_link">
                <img src={Cart} alt="_cart_" />
                <span>Cart</span>
              </NavLink>
              <NavLink to="/settings" className="nav_link">
                <img src={Settings} alt="_settings_" />
                <span>Settings</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/news_feed" className="nav_link">
                <img src={Feed} alt="_feed_" />
                <span>Feed</span>
              </NavLink>
              <NavLink to="/upload_item" className="nav_link">
                <img src={Upload} alt="upload" />
                <span>Uplaod Item</span>
              </NavLink>

              <NavLink to="/manage_items" className="nav_link">
                <img src={Manage} alt="manage" />
                <span>Manage Items</span>
              </NavLink>
              <NavLink to="/orders" className="nav_link">
                <img src={Orders} alt="orders" />
                <span>Orders</span>
              </NavLink>
              <NavLink to="/settings" className="nav_link">
                <img src={Settings} alt="_settings_" />
                <span>Settings</span>
              </NavLink>
              <NavLink to="/pharmacies" className="nav_link">
                <img src={Pharm} alt="_pharmacies_" />
                <span>Pharmacies</span>
              </NavLink>
            </>
          )}
          <div className="logout">
            <img src={Logout} alt="_logout_" style={{ marginRight: "1rem" }} />
            <span>Logout</span>
          </div>
        </nav>
      </div>
    </div>
  );
}
