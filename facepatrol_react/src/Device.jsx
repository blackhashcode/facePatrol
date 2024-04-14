import { useEffect, useState } from "react";
import "./Device.css";
import Cookies from "js-cookie";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
function Device() {
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const email = Cookies.get("email");
    if (!email) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Sidebar toggled={toggled} setToggled={setToggled} />
      <div className="main" id="main">
        <div className="main-top">
          <button onClick={() => setToggled(!toggled)} className="menu">
            <i className="fa-solid fa-bars"></i>
          </button>
          <h1>Devices</h1>
        </div>
        <div className="device-panel">
          <p>Name</p>
          <p>Position</p>
          <p className="data-1">Status</p>
        </div>
        <div className="camera-container-1">
          <div className="camera-1">
            <p>
              <b>Camera#1</b>
            </p>
            <p>Sac5</p>
            <p className="data-1">Active</p>
          </div>
          <div className="icon" id="icon-1">
            <i className="fa-solid fa-pen"></i>
          </div>
        </div>
        <div className="camera-container-2">
          <div className="camera-2">
            <p>
              <b>Camera#2</b>
            </p>
            <p>Plaza</p>
            <p className="data-1">Active</p>
          </div>
          <div className="icon" id="icon-1">
            <i className="fa-solid fa-pen"></i>
          </div>
        </div>
        <div className="camera-container-3">
          <div className="camera-3">
            <p>
              <b>Camera#3</b>
            </p>
            <p>Galaxy</p>
            <p className="data-1">Active</p>
          </div>
          <div className="icon" id="icon-1">
            <i className="fa-solid fa-pen"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Device;
