import React from "react";
import SliderData from "./SliderData";
import '../../styles/stylesSlider.css'
import { useSelector } from "react-redux";
import { selectNewsStatus } from "../../../services/slices/dataCryptoNewsSlice";

export default function SliderNews(){

  const status = useSelector(selectNewsStatus)

 return (
  <>
    {
      status === 'failed' && <p className="errorMsg">😭 Connection Error, please try later</p>
    }
    <div className="slider_news_container">
      <SliderData />
    </div>
  </>
 )
}