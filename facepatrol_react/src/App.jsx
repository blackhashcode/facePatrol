import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import User from "./User.jsx";
import Device from "./Device.jsx";

function App() {
  return (
    // <Dashboard/>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Dashboard />} />
        <Route exact path="/devices" element={<Device />} />
        <Route exact path="/users" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
