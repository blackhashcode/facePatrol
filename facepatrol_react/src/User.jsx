import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./User.css";
import supabase from "./supabase";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function User() {
  const [toggled, setToggled] = useState(false);
  const [inputData, setInputData] = useState({ role: "Admin" });
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const email = Cookies.get("email");
    if (!email) {
      navigate("/");
    }
  }, []);

  const createUser = async () => {
    const { data, error } = await supabase.from("users").insert([inputData]);

    if (error) {
      console.error("Error inserting data", error);
    } else {
      console.log("Data inserted", data);
      // Handle success scenario (e.g., clear form, show message)
    }
    setAddModal(false);
  };
  const editUser = async () => {
    const { data, error } = await supabase
      .from("users")
      .update(inputData)
      .eq("id", inputData.id);
    if (error) {
      console.error("Error inserting data", error);
    } else {
      console.log("Data inserted", data);
      // Handle success scenario (e.g., clear form, show message)
    }
    setEditModal(false);
  };
  const deleteUser = async (id) => {
    const { data, error } = await supabase.from("users").delete().eq("id", id);

    if (error) {
      console.error("Error inserting data", error);
    } else {
      console.log("Data inserted", data);
      // Handle success scenario (e.g., clear form, show message)
    }
    setEditModal(false);
  };

  const getUsers = async () => {
    const { data, error } = await supabase.from("users").select();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Sidebar toggled={toggled} setToggled={setToggled} />
      <div className="main" id="main">
        <div className="main-top">
          <button onClick={() => setToggled(!toggled)} className="menu">
            <i className="fa-solid fa-bars"></i>
          </button>
          <h1>Users</h1>
        </div>
        <div>
          <button className="addButton" onClick={() => setAddModal(true)}>
            Add User
          </button>
        </div>
        {addModal && (
          <div className="addModal">
            <button className="back" onClick={() => setAddModal(false)}>
              Back
            </button>
            <input
              onChange={(e) =>
                setInputData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              placeholder="Name"
            ></input>
            <input
              onChange={(e) =>
                setInputData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              placeholder="Email"
            ></input>
            <input
              type="password"
              onChange={(e) =>
                setInputData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              placeholder="Password"
            ></input>
            <select
              onChange={(e) =>
                setInputData((prev) => {
                  return { ...prev, role: e.target.value };
                })
              }
              defaultValue="Admin"
            >
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
            <button
              className="add"
              onClick={async () => {
                await createUser();
                await getUsers();
              }}
            >
              Add
            </button>
          </div>
        )}

        {editModal && (
          <div className="addModal">
            <button className="back" onClick={() => setEditModal(false)}>
              Back
            </button>
            <input
              onChange={(e) =>
                setInputData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              defaultValue={inputData.name}
              placeholder="Name"
            ></input>
            <input
              onChange={(e) =>
                setInputData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              defaultValue={inputData.email}
              placeholder="Email"
            ></input>
            <select
              onChange={(e) =>
                setInputData((prev) => {
                  return { ...prev, role: e.target.value };
                })
              }
              defaultValue={inputData.role}
            >
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
            <button
              className="Add"
              onClick={async () => {
                await editUser();
                await getUsers();
              }}
            >
              Edit
            </button>
            <button
              className="back"
              onClick={async () => {
                await deleteUser(inputData.id);
                await getUsers();
              }}
            >
              Delete
            </button>
          </div>
        )}
        <div className="admin-panel">
          <p>Name</p>
          <p>Role</p>
          <p className="data-1">Last Login</p>
        </div>
        {users.map((d) => {
          return (
            <div className="admin-container-1">
              <div className="admin-1">
                <p>
                  <b>{d.name}</b>
                </p>
                <p>{d.role}</p>
                <p className="data-1">{d.lastLogin || `NULL`}</p>
              </div>
              <div
                onClick={() => {
                  setInputData(d);
                  setEditModal(true);
                }}
                className="icon"
                id="icon-1"
              >
                <i className="fa-solid fa-pen"></i>
              </div>
            </div>
          );
        })}
        {/*        
        <div className="admin-container-2">
          <div className="admin-2">
            <p>
              <b>Tausif Mushtaque</b>
            </p>
            <p>Admin</p>
            <p className="data-1">18/03/2024</p>
          </div>
          <div className="icon" id="icon-1">
            <i className="fa-solid fa-pen"></i>
          </div>
        </div>
        <div className="admin-container-3">
          <div className="admin-3">
            <p>
              <b>Pahela Chakma</b>
            </p>
            <p>Admin</p>
            <p className="data-1">18/03/2024</p>
          </div>
          <div className="icon" id="icon-1">
            <i className="fa-solid fa-pen"></i>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default User;
