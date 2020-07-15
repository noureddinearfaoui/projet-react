import React, { useState, memo } from "react";
import "./Signin.css";
import { authentification } from "../../services/user.service";

import { Redirect } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [danger, setDanger] = useState(false);
  const [errors, setErrors] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setredirect] = useState(false);

  const Login = () => {
    authentification(email, password).then(
      (result) => {
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(result));
        sessionStorage.setItem("user", JSON.stringify(result));
        setredirect(true);
      },
      function (err) {
        setErrors(err);
        setDanger(true);
      }
    );
  };
  return (
    <div className="Signin">
      {redirect && <Redirect to="/profil" />}
      {danger && (
        <div className="alert alert-danger">
          <strong>Danger!</strong>
          {errors}
        </div>
      )}

      <div className="login-form-1">
        <h3>S'identifier</h3>

        <div className="form-group">
          <input
            type="text"
            aria-label="Email"
            className="form-control"
            placeholder="Your Email *"
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            aria-label="Password"
            className="form-control"
            placeholder="Your Password *"
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button data-testid="submit" className="btnSubmit" onClick={Login}>
            {" "}
            Login
          </button>
        </div>
        <div className="form-group">
          <p>Vous n'etes pas membre?</p>
          <a href="/signup" className="inscri">
            Inscrivez-vous
          </a>
        </div>
      </div>
    </div>
  );
}
export default memo(Signin);
