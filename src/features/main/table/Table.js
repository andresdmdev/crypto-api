import React from "react";
import TableBody from "./TableBody";
import '../../styles/stylesTable.css'
import Status from "./Status";

export default function Table(){

  return (
    <div className="table_container">
      <table className="table">
        <thead>
            <tr className="table_head_row">
                <th scope="col" className='table_head_title first-column'>#</th>
                <th scope="col" className='table_head_title sticky second-column'>Name</th>
                <th scope="col" className='table_head_title third-column'>Price</th>
                <th scope="col" className='table_head_title four-column'>24h %</th>
                <th scope="col" className='table_head_title four-column'>7d %</th>
                <th scope="col" className='table_head_title six-column'>Market Cap</th>
                <th scope="col" className='table_head_title seven-column'>Volumen(24h)</th>
                <th scope="col" className='table_head_title eigth-column'>Circulating Supply</th>
                <th scope="col" className='table_head_title nine-column'>Last 7 Days</th>
            </tr>
        </thead>
        <TableBody />
      </table>
      <Status />
    </div>
  )
}