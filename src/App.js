import "./App.css";
import { Link } from "react-router-dom";
import React, { Component } from 'react';

function App() {
  var state = "hai";
  function hai(){
    alert("hai");
    state = "jauh";
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };


  return (
    <div className="App">
      <button onClick={hai}>Hai</button>
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

              <form action="../../index3.html" method="post">
                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    value={state}
                  />
                  <b>{state}</b>
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
                  />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span class="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                  </div>
                  <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
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

export default App;
