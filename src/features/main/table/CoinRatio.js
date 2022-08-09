import React from "react";
import greenLogo from '../../../img/green.svg'
import redLogo from '../../../img/red.svg'

export default function CoinRatio({ ratio }){

  const logo = ratio > 0 ? greenLogo : redLogo

  const numberWithOutSimbol = ratio < 0 ? ratio * -1 : ratio

  return (
    <td 
     className={`table_tbody_coin ${ratio > 0 ? 'green' : 'red' }`}
    >
    <img src={logo} alt="logo" className="ratio_logo" />
    {numberWithOutSimbol.toFixed(2)}%
    </td>
  )
}