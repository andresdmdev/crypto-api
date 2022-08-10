import React from "react";
import calcVolume from "../../../../helpers/calcVolume";
import formatNumberWithOutDecimals from "../../../../helpers/formatNumberWithOutDecimals";

export default function CoinVolume({ price, volume, ticker }){
  return (
    <td className="table_tbody_coin  seven-column">
      <div className="table_body_coin_volume">
        <span className="coin_volume_value">${formatNumberWithOutDecimals(Math.floor(volume))}</span>
        <span className="coin_volume_ticker">{`${calcVolume(price, volume)} ${ticker.toUpperCase()}`}</span>
      </div>
    </td>
  )
}