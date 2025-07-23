import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Bikash Baliarsingh</div>
      <nav>
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
