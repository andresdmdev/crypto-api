import React from "react";
import './styleHeader.css'
import {RiCoinsFill} from "react-icons/ri";

function Header(){
  return (
    <header className="header align-middle position-fixed top-0 d-flex align-items-center z-index-1 w-100">
        <RiCoinsFill className="headerIcon" />
        <h1 className="text-white">Crypto Quotation</h1>
        <h4 className="text-white position-fixed end-0 fs-6 m-3">By Andrés Márquez</h4>
    </header>
  );
}

export default Header; 