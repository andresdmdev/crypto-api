import React from "react";

export default function CoinName({ image, symbol, name, rank }){
  return (
    <td className="table_tbody_coin sticky second-column">
        <div className="text_coin">
          <img 
            src={image} 
            alt={symbol} 
            className="text_coin_logo" 
          />
          <div className="table_body_coin_name">
            <span className="text_coin_name">{name}</span>
            <div className="text_coin_name_block">
              <span className="text_coin_rank">{rank}</span>
              <span className="text_coin_symbol">{symbol.toUpperCase()}</span>
            </div>
          </div>
        </div>
    </td>
  )
}