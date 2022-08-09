import React from "react";
import '../styles/stylesHeader.css'
import logo from '../../img/Logo.svg'
import Form from "./Form";

function Header(){

  return (
    <header className="header">
      <div className="header_logo">
        <img src={logo} alt="logo" className="header_logo_image" />
        <h2 className="header_logo_name">Cryptocurrencies</h2>
      </div>
      <Form web={true} />
    </header>
  );
}

export default Header; 