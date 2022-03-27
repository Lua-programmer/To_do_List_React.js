import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaPaste } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      Developed by : Luana Melissa{" "}
      <a target="_blank" href="https://github.com/Lua-programmer">
        <AiFillGithub  />
      </a>{" "}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/luana-melissa-473208207/"
      >
        {" "}
        <FaLinkedinIn />{" "}
      </a>{" "}
      <a
        target="_blank"
        href="https://lua-programmer.herokuapp.com/"
      >
        <FaPaste />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/luana.melissa/"
      >
        <RiInstagramFill />
      </a>
    </footer>
  );
}

export default Footer;
