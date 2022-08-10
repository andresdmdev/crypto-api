
export default function formatNumberWithOutDecimals(number){

  return new Intl.NumberFormat().format(number)
}