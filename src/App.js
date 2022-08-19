import "./App.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { useState } = React;

const App = () => {
  const [username, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const [password, setData] = useState("");
  const handleChange2 = (e) => setData(e.target.value);
  const [data, setResponse] = useState("");

  const hai = () => {
    fetch(
      "https://api.papsarnoldus.my.id/login.php?username=" +
        username +
        "&password=" +
        password
    )
      .then((response) => response.json())
      .then((data) => checkLogin(data));
  };

  const checkLogin = (e) => {
    if (e.status == "eror") {
      toast("Login Gagal");
    } else if (e.status == "succes") {
      if (e.result[0].Role == "Admin") {
        sessionStorage.setItem("Login", "success");
        sessionStorage.setItem("Username", e.result[0].Username);
        sessionStorage.setItem("Profile_picture", e.result[0].Profile_picture);
        sessionStorage.setItem("First_name", e.result[0].First_name);
        sessionStorage.setItem("Bidang", e.result[0].Bidang);
        window.location.href = "/dashboard";
      } else {
        toast("Hanya admin yang dapat login");
      }
    }
  };
  if (sessionStorage.getItem("Login") == "success") {
    window.location.href = "/dashboard";
  } else {
    return (
      <div className="App">
        <ToastContainer />
        <div class="hold-transition login-page">
          <div class="login-box">
            <div class="login-logo">
              <a href="../../index2.html">
                <b>My</b>Akolit
              </a>
            </div>
            <div class="card">
              <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <div class="input-group mb-3">
                  <input
                    type="username"
                    class="form-control"
                    placeholder="Email"
                    value={username}
                    onChange={handleChange}
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange2}
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8"></div>
                  <div class="col-4">
                    <button class="btn btn-primary btn-block" onClick={hai}>
                      Sign In
                    </button>
                  </div>
                </div>
                <p class="mb-1">
                  <br></br>
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p class="mb-0">
                  <a href="register.html" class="text-center">
                    Register a new membership
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
