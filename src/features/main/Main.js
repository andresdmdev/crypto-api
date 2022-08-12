import React from "react";
import Table from "./table/Table";
import '../../styles/App.css'
import Form from "../header/Form";
import SliderNews from "./slider/SliderNews";

export default function Main(){

  return(
    <main className="main">
      <h1 className="main_title">Today's Cryptocurrency Prices</h1>
      <SliderNews />
      <Form web={false} />
      <Table />
    </main>
  )
}