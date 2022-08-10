import React from "react";
import formatNumberWithOutDecimals from "../../../../helpers/formatNumberWithOutDecimals";

export default function CoinSupply({ supply, symbol }){
  return (
    <td className="table_tbody_coin  eigth-column">
      {formatNumberWithOutDecimals(Math.floor(supply))}
      <span className="text_coin_symbol_supply">{symbol.toUpperCase()}</span>
    </td>
  )
}