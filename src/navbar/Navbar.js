import React from "react";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <MicOutlinedIcon className="navbarIcon" />
      <h5 className="rounit">by Rounit Sinha</h5>
      <h1 className="navbarText">Voici.inc</h1>
    </div>
  );
}

export default Navbar;
