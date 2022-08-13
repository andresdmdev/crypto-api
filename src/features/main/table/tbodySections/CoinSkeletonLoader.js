import React from "react";
import '../../../styles/stylesSkeletonTable.css'

export default function CoinSkeletonLoader(){
  return (
    <tr className="table_tbody_row">
      <td className="table_tbody_coin sticky first-column">
        <div className="text_coin_symbol_skeleton skeleton skeleton-text-table first"></div>
      </td>
      <td className="table_tbody_coin sticky second-column">
        <div className="text_coin">
          <div className="text_coin_logo_skeleton skeleton"></div>
          <div className="table_body_coin_name_skeleton">
            <div className="text_coin_name_skeleton skeleton skeleton-text-table first"></div>
            <div className="text_coin_name_skeleton skeleton skeleton-text-table"></div>
          </div>
        </div>
      </td>
      <td className="table_tbody_coin third-column">
        <div className="text_price_skeleton skeleton skeleton-text-table last"></div>
      </td>
      <td className='table_tbody_coin four-column'>
        <div className="text_ratio_skeleton skeleton skeleton-text-table last"></div>
      </td>
      <td className='table_tbody_coin four-column'>
        <div className="text_ratio_skeleton skeleton skeleton-text-table last"></div>
      </td>
      <td className="table_tbody_coin  six-column">
        <div className="text_mcap_skeleton market_cap_movil skeleton skeleton-text-table last"></div>
        <div className="text_mcap_skeleton market_cap skeleton skeleton-text-table last"></div>
      </td>
      <td className="table_tbody_coin  seven-column">
        <div className="table_body_coin_volume_skeleton">
          <div className="text_vol_skeleton coin_volume_value skeleton skeleton-text-table last"></div>
          <div className="text_vol_skeleton coin_volume_ticker skeleton skeleton-text-table first"></div>
        </div>
      </td>
      <td className="table_tbody_coin  eigth-column">
        <div className="text_sup_skeleton skeleton skeleton-text-table last"></div>
      </td>
      <td className="table_tbody_coin sparkline nine-column">
        <div className="sparkline_skeleton skeleton skeleton-text-table"></div>
      </td>
    </tr>
  )
}