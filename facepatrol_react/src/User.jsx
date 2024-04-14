import './User.css'

function User(){
    return(
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
      <h1>Users</h1>
    </div>
    <div className="admin-panel">
      <p>Name</p>
      <p>Role</p>
      <p className="data-1">Last Login</p>
    </div>
    <div className="admin-container-1">
      <div className="admin-1">
        <p><b>Arshad Uzzaman</b></p>
        <p>Admin</p>
        <p className="data-1">18/03/2024</p>
      </div>
      <div className="icon" id="icon-1"><i className="fa-solid fa-pen"></i></div>
    </div>
    <div className="admin-container-2">
      <div className="admin-2">
        <p><b>Tausif Mushtaque</b></p>
        <p>Admin</p>
        <p className="data-1">18/03/2024</p>
      </div>
      <div className="icon" id="icon-1"><i className="fa-solid fa-pen"></i></div>
    </div>
    <div className="admin-container-3">
      <div className="admin-3">
        <p><b>Pahela Chakma</b></p>
        <p>Admin</p>
        <p className="data-1">18/03/2024</p>
      </div>
      <div className="icon" id="icon-1"><i className="fa-solid fa-pen"></i></div>
    </div> 
  </div>
</div>
    )

}
export default User