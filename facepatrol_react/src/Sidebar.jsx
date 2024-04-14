import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Sidebar({ toggled, setToggled }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="sidebar"
        id="sidebar"
        style={toggled ? { display: "block", zIndex: 9 } : {}}
      >
        <div className="FacePatrol">
          <button onClick={() => setToggled(!toggled)} className="close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h1>FacePatrol</h1>
        </div>
        <div className="sidebar-items">
          <span className="home">
            <button
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </button>
          </span>
          <span className="users">
            <button
              onClick={() => {
                navigate("/users");
              }}
            >
              Users
            </button>
          </span>
          <span className="devices">
            <button
              onClick={() => {
                navigate("/devices");
              }}
            >
              Devices
            </button>
          </span>
        </div>
        <div className="logout">
          <button
            onClick={() => {
              Cookies.remove("email", { path: "" });
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
