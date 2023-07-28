import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Somdotta Sarkar</h1>
        <h5 > Full-stack Developer</h5>
        <CTA />
        <HeaderSocials />

