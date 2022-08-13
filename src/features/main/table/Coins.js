import React from "react";
import CoinMarketCap from "./tbodySections/CoinMarketCap";
import CoinName from "./tbodySections/CoinName";
import CoinPrice from "./tbodySections/CoinPrice";
import CoinRatio from "./tbodySections/CoinRatio";
import CoinSupply from "./tbodySections/CoinSupply";
import CoinVolume from "./tbodySections/CoinVolume";
import Sparkline from "./tbodySections/SparkLine";

const Coins = ({ coin }) => {
    
    return(
        <>
          <tr className="table_tbody_row">
              <td className="table_tbody_coin sticky first-column">
                <span className="text_coin_symbol">{coin.rank}</span>
              </td>
              <CoinName 
                image={coin.image} 
                symbol={coin.symbol} 
                name={coin.name} 
                rank={coin.rank}
              />
              <CoinPrice price={coin.current_price} />
              <CoinRatio ratio={coin.price_24h} />
              <CoinRatio ratio={coin.price_7d} />
              <CoinMarketCap marketCap={coin.market_cap} />
              <CoinVolume 
                price={coin.current_price} 
                volume={coin.volume} 
                ticker={coin.symbol} 
              />
              <CoinSupply 
                supply={coin.supply} 
                symbol={coin.symbol} 
              />
              <Sparkline 
                data={coin.sparkline} 
                days={coin.price_7d} 
              />
          </tr>
        </>
    );
}

export default Coins;