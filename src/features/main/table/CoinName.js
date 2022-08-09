import React from "react";

export default function CoinName({ image, symbol, name }){
  return (
    <td className="table_tbody_coin sticky second-column">
        <div className="text_coin">
          <img 
            src={image} 
            alt={symbol} 
            className="text_coin_logo" 
          />
          <span className="text_coin_name">{name}</span>
          <span className="text_coin_symbol">{symbol.toUpperCase()}</span>
        </div>
    </td>
  )
}