import './Dashboard.css'


function Dashboard() {
 
  

    return (
      
      <div>
        <div className="sidebar" id="sidebar">
            <div className="FacePatrol">
              <h1>FacePatrol</h1>
              <button onClick="myCloseFunction()" className="close">
              <i className="fa-solid fa-xmark"></i>
              </button>
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
              <h1>Dashboard</h1>
            </div>
            <div className="main-top2">
              <div className="card">
                <h3>Cameras Running</h3>
                <h1>2</h1>
                <a href="https://playvalorant.com/en-us/">View Devices</a>
              </div>
              <div className="card">
                <h3>Intruders Detected</h3>
                <h1>6</h1>
                <p>(Last Hour)</p>
              </div>
              <div className="recent-logs">
                <h3>Recent Logs</h3>
                <p><span className="time">8:28 am </span><span className="red">An Intruder</span> was detected on camera#1</p>
                <p><span className="time">8:27 am </span><span className="red">An Intruder</span> was detected on camera#3</p>
                <p><span className="time">8:25 am </span>Arshad Uzzaman(<span className="student">student</span>) was verified on camera#1</p>
                <p><span className="time">8:25 am </span>Tausif Mushtaque(<span className="student">student</span>) was verified on camera#1</p>
                <p><span className="time">8:23 am </span><span className="red">An Intruder</span> was detected on camera#3</p>
              </div>
          </div>
          <div className="view-logs">
            <div className="log-div">
              <button>VIEW LOGS</button>
            </div>
          </div>
     
        </div>
      </div>
      
         
    )
  }
    

export default Dashboard
