import React from "react";
import Presentation from "./Presentation";
import Table from "./table/Table";
import '../../styles/App.css'
import Form from "../header/Form";
import PresentationMovil from "./PresentationMovil";
import SliderNews from "./slider/SliderNews";

export default function Main(){

  return(
    <main className="main">
      {/* <Presentation /> */}
      <SliderNews />
      <PresentationMovil />
      <Form web={false} />
      <Table />
    </main>
  )
}