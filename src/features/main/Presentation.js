import React from "react";
import image from '../../img/image.png'
import '../styles/stylesPresentation.css'

export default function Presentation(){
  return (
    <div className="main_presentation">
      <div>
        <h2 className="main_presentation_title">
          Find Your
        </h2>
        <h2 className="main_presentation_title">
          Crypto
        </h2>
      </div>
      <img src={image} alt="imageL" className="main_presentation_image" />
    </div>
  )
}