import './Device.css'
function Device(){
    return(
        <div>
  <div className="sidebar" id="sidebar">
    <div className="FacePatrol">
      <button onClick="myCloseFunction()" className="close">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h1>FacePatrol</h1>
    </div>
    <div className="sidebar-items">
        <span className="home">
            <button>Home</button>
        </span>
        <span className="users">
            <button>Users</button>
        </span>
        <span className="devices">
            <button>Devices</button>
        </span>
      </div>  
  </div>
  <div className="main" id="main">
    <div className="main-top">
      <button onClick="myFunction()" className="menu">
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
          <p><b>Camera#1</b></p>
          <p>Sac5</p>
          <p className="data-1">Active</p>
        </div>
        <div className="icon" id="icon-1"><i className="fa-solid fa-pen"></i></div>
      </div>
      <div className="camera-container-2">
        <div className="camera-2">
          <p><b>Camera#2</b></p>
          <p>Plaza</p>
          <p className="data-1">Active</p>
        </div>
        <div className="icon" id="icon-1"><i className="fa-solid fa-pen"></i></div>
      </div>
      <div className="camera-container-3">
        <div className="camera-3">
          <p><b>Camera#3</b></p>
          <p>Galaxy</p>
          <p className="data-1">Active</p>
        </div>
        <div className="icon" id="icon-1"><i className="fa-solid fa-pen"></i></div>
      </div>
  </div>
</div>

    )
}
export default Device