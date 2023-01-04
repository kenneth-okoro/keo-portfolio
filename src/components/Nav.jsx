import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
  AiOutlineProject,
} from "react-icons/ai";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav
      className={`w-max py-3 px-7 z-20 fixed left-1/2 -translate-x-1/2 bottom-8 flex gap-3 rounded-[3rem] backdrop-blur-lg bg-black/30`}
    >
      <a
        href="#"
        className={`navi ${activeNav === "#" ? "navi-active" : ""}`}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={`navi ${activeNav === "#about" ? "navi-active" : ""}`}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={`navi ${activeNav === "#experience" ? "navi-active" : ""}`}
        onClick={() => setActiveNav("#experience")}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfolio"
        className={`navi ${activeNav === "#portfolio" ? "navi-active" : ""}`}
        onClick={() => setActiveNav("#portfolio")}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        className={`navi ${activeNav === "#contact" ? "navi-active" : ""}`}
        onClick={() => setActiveNav("#contact")}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
