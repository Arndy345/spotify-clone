import React from "react";
import "./Login.css";
import spotifyLogo from "./components/images/spot-logo.jpg";
import { loginUrl } from "./components/spotify";
function Login() {
  return (
    <div className="login">
      <img src={spotifyLogo} alt="spotify-logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
