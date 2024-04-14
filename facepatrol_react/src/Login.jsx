// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Login.css";
import supabase from "./supabase";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [inputData, setInputData] = useState();
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const email = Cookies.get("email");
    if (email) {
      navigate("/home");
    }
  }, []);

  function setCookie(name, value, days) {
    Cookies.set(name, value, { expires: days, path: "" });
  }
  const handleLogin = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", inputData.email);

    if (error) {
      console.error("Error:", error);
      return null;
    }

    if (!inputData.password || !inputData.email) {
      setErr("Fields Cannot be Empty");
      return;
    }

    if (!data || data.length == 0) {
      setErr("No account found");
      return;
    }

    if (inputData.password == data[0].password) {
      navigate("/home");
      setCookie("email", inputData.email, 1);
      console.log("Success");
    } else {
      setErr("Wrong Password");
      console.log("Wrong Password");
      console.log(data);
      console.log(inputData);
    }
  };

  return (
    <div className="loginbody">
      <div className="login-container">
        <header>
          <span className="bold">Login</span> to FacePatrol
        </header>
        <button>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVxJREFUSEvdle1NQzEMRd1JKJvAJJRJgElgk7IJMAn0SDF6da4TR6oqhKX+6Uty7OuvnV3Zdlfm2Z8H7s3Mf4jzaWbvKypVI3w6PX5osPg+UOyxAp8BieaYgFRgb2b20iKXgY+Adw22ohhnnxt0CUhkHwMSMnImGhEibWpZhMhIhNGi90AfWlRTGI8pIMXxGkhUIp57gURHAGffzs4qIFJGuW6rD84SroDf4RKRIddFLAKVnFl0o6Jy55D5futpBZgVVlRCKQAQh38tPsZEoRK3Hp5d2HyrALvCjEDV7JmkFeA0QtXwWdGoxveZ60J0vanyE5veE1/ps9hSnbPVxq9A1XTq0qGASMWkiaMNqG+DbeFxjvNRYjnqspKvDG+gKo/83xWLezhaT2oIVKYNsHQZX3oBT3M9A7psrCBypVaWS6jy2ylSAW4vkTOH3pyk+1od7KvASg6HZ/4/8AdOU0gdTSOz0QAAAABJRU5ErkJggg=="
            alt="google-logo"
          />
          Login with Google
        </button>
        <hr />
        <span className="line">or</span>
        <div className="input-box">
          <input
            onChange={(e) => {
              setInputData((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className="input-box">
          <input
            onChange={(e) => {
              setInputData((prev) => {
                return { ...prev, password: e.target.value };
              });
            }}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button onClick={handleLogin} className="btn">
          Login
        </button>
        <p style={{ color: "red", fontSize: "20px" }}>{err}</p>
      </div>
    </div>
  );
}

export default Login;
