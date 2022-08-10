import React from "react";
import { Sparklines, SparklinesCurve } from 'react-sparklines'

export default function Sparkline({ data, days }){

  const colorLine = days > 0 ? '#209269' : '#B74927'

  return (
    <td className="table_tbody_coin sparkline nine-column">
      <Sparklines data={data} width={140} height={40}>
        <SparklinesCurve style={{ strokeWidth: 2, stroke: colorLine, fill: 'none' }} />
      </Sparklines>
    </td>
  )
}