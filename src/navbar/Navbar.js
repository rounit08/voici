import React from "react";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import "./Navbar.css";
import mic from "../images/navbarImage-removebg-preview.png";

function Navbar() {
  return (
    <div className="navbar">
      <div class="wave"></div>

      <img className="navbarImage" src={mic} />
      <h1 className="navbarText">Voici.inc</h1>
    </div>
  );
}

export default Navbar;
