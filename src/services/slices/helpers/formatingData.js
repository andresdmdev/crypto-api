export default function formatingData(data){

  return data.map(coin => (
    { 
      id: coin.id,
      rank: coin.market_cap_rank, 
      name: coin.name,
      symbol: coin.symbol, 
      image: coin.image, 
      ath: coin.ath, 
      atl: coin.atl,
      supply: coin.circulating_supply,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      volume: coin.total_volume,
      sparkline: coin.sparkline_in_7d.price,
      price_24h: coin.price_change_percentage_24h_in_currency,
      price_7d: coin.price_change_percentage_7d_in_currency, 
    }
  ))
}