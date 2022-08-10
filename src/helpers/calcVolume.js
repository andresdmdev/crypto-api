
export default function calcVolume(price, volume){

  return Intl.NumberFormat().format(Math.floor(volume/price))
}