import formatNumber from "./formatNumber"

export default function calcMarketCapMovil(value){

  const newNumber = (Math.floor(value) / 10e8).toFixed(2)

  const fomartNumber = formatNumber(Number(newNumber))
  
  return fomartNumber
}