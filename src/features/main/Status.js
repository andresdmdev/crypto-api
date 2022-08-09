import React from "react";
import { useSelector } from "react-redux";
import { getError, getStatus } from "../../services/slices/dataCryptoSlice";

export default function Status(){

  const status = useSelector(getStatus)
  const error = useSelector(getError)

  return (
    <>
      { 
        status === 'loading' && 
        <div className="loading">
          <span className="loader"></span>
        </div> 
      }
      {
        status === 'failed' &&
        <h2>{error}</h2>
      }
    </>
  )
}