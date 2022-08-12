import React, { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { 
  dataCryptoNews, 
  selectAllNews, 
  selectNewsStatus } from "../../../services/slices/dataCryptoNewsSlice";
import News from "./News";
import ArrowImg from "./ArrowImg";
import LoaderSkeleton from "./LoaderSkeleton";

export default function SliderData() {

  const [changeClass, setChangeClass] = useState(true)

  const data = useSelector(selectAllNews)
  const status = useSelector(selectNewsStatus)

  const dispatch = useDispatch()

  function handleClick(){
    setChangeClass(prevState => !prevState)
  }

  useEffect(() => {
    if(status === 'idle'){
      dispatch(dataCryptoNews())
    }
  }, [dispatch, status])

  const items = data.map(item => (
    <News item={item} key={nanoid()} />
  ))

  return (
    <>
      <div className="carousel_container">
        <div className={`carousel ${changeClass ? '' : 'move'}`}>
          <ArrowImg changeClass={changeClass} handleClick={handleClick} />
          {
            status === 'succeeded' ?
            items :
            <LoaderSkeleton />
          }
          <ArrowImg changeClass={changeClass} handleClick={handleClick} />
        </div>
      </div>
    </>
  )
}