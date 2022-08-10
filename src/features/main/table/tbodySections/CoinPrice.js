import React from "react";
import formatNumber from "../../../../helpers/formatNumber";

export default function CoinPrice({ price }){

  const formatPrice = price > 0.01 ? formatNumber(Number(price).toFixed(2)) : price;

  return (
    <td className="table_tbody_coin third-column">{formatPrice}</td>
  )
}