import React from "react";
import '../styles/stylesPresentation.css'
import imageMovil from '../../img/image-movil.png'

export default function PresentationMovil(){
  return (
    <img src={imageMovil} alt="coins-movil" className="main_presentation_movil" />
  )
}