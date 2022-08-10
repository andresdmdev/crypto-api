import React from "react";
import calcMarketCapMovil from "../../../../helpers/calcMarketCapMovil";
import formatNumberWithOutDecimals from "../../../../helpers/formatNumberWithOutDecimals";

export default function CoinMarketCap({ marketCap }){

  return (
    <td className="table_tbody_coin  six-column">
      <span className="market_cap_movil">{calcMarketCapMovil(marketCap)}B</span>
      <span className="market_cap">${formatNumberWithOutDecimals(Math.floor(marketCap))}</span>
    </td>
  )
}