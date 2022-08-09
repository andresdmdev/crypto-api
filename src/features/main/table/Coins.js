import React from "react";
import formatNumber from "../../../helpers/formatNumber";
import CoinName from "./CoinName";
import CoinRatio from "./CoinRatio";
import Sparkline from "./SparkLine";

const Coins = ({ coin }) => {
    
    /* Price */
    const price = coin.current_price > 0.01 ? 
    formatNumber(Number(coin.current_price).toFixed(2)) :
    coin.current_price;

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
                />
                <td className="table_tbody_coin">${price}</td>
                <CoinRatio ratio={coin.price_24h} />
                <CoinRatio ratio={coin.price_7d} />
                <td className="table_tbody_coin">${formatNumber(Math.floor(coin.market_cap))}</td>
                <td className="table_tbody_coin">${formatNumber(Math.floor(coin.volume))}</td>
                <td className="table_tbody_coin">
                  {formatNumber(Math.floor(coin.supply))}
                  <span className="text_coin_symbol_supply">{coin.symbol.toUpperCase()}</span>
                </td>
                <Sparkline data={coin.sparkline} days={coin.price_7d} />
            </tr>
        </>
    );
}

export default Coins;