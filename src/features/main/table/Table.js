import React from "react";
import TableBody from "./TableBody";
import '../../styles/stylesTable.css'

export default function Table(){
  return (
    <div className="table_container">
      <table className="table">
        <thead>
            <tr className="table_head_row">
                <th scope="col" className='table_head_title sticky first-column'>#</th>
                <th scope="col" className='table_head_title sticky second-column'>Name</th>
                <th scope="col" className='table_head_title'>Price</th>
                <th scope="col" className='table_head_title'>24h %</th>
                <th scope="col" className='table_head_title'>7d %</th>
                <th scope="col" className='table_head_title'>Market Cap.</th>
                <th scope="col" className='table_head_title'>Volumen(24h)</th>
                <th scope="col" className='table_head_title'>Circulating Supply</th>
                <th scope="col" className='table_head_title'>Last 7 Days</th>
            </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  )
}