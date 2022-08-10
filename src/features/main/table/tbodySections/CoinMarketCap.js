import React from "react";
import calcMarketCapMovil from "../../../../helpers/calcMarketCapMovil";
import formatNumberWithOutDecimals from "../../../../helpers/formatNumberWithOutDecimals";

export default function CoinMarketCap({ marketCap }){

  const screenMovil = window.innerWidth < 800

  return (
    <td className="table_tbody_coin  six-column">
      {
        screenMovil ?
        `${calcMarketCapMovil(marketCap)}B` :
        `$${formatNumberWithOutDecimals(Math.floor(marketCap))}`
      }
    </td>
  )
}