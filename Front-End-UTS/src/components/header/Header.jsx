import React from "react";
import LoGo from "../../assets/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Shopping</h1>
    </header>
  );
};

export default Header;
