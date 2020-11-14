import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import netflix from "../components/images/netflix1.png";
import img2 from "../components/images/logo6.jpeg";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "black"} mr-2`}>
      <img src={netflix} alt="Netflix Logo" className="img-logo" />
      <img src={img2} alt="" className="img-art" />
    </div>
  );
}
export default Nav;
