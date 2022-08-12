import React from "react";
import arrowLeft from '../../../img/arrow-left.svg'
import arrowRight from '../../../img/arrow-rigth.svg'

export default function ArrowImg({ changeClass, handleClick }){

  const newClass = changeClass ? 'right' : 'left'

  const arrow = changeClass ? arrowRight : arrowLeft

  return (
    <div
      className={`btn_arrow ${newClass}`}
      onClick={handleClick}
    >
      <img src={arrow} alt='arrow' className={`arrow ${newClass}`} />
    </div>
  )
}