import React from "react";

const Coins = ({ coins }) => {
    
    /* Price */
    const price = coins.current_price > 0.01 ? new Intl.NumberFormat().format(Number(coins.current_price).toFixed(2)) : coins.current_price;

    /* Market Cap */
    const cap = Number(coins.market_cap).toFixed(2);
    const marketCap = new Intl.NumberFormat().format(cap); 

    /* Image */
    const img = <img src={coins.image} alt={coins.symbol} className="me-2" style={{ width: '30px', height: '30px' }} />

    /* Name and Symbol */
    const symbol1 = (coins.symbol).toUpperCase();
    const name = <span className="me-2">{coins.name}</span>
    const symbol = <span className="fw-bold">{symbol1}</span>
    const description = <div className="text-start">{img}{name}{symbol}</div>;

    /* Supply */
    const coinsSupplied = Number(coins.circulating_supply).toFixed(2);
    const supply = new Intl.NumberFormat().format(coinsSupplied);

    /* Domminance */
    //const dominance = (coins.market_cap_dominance * 100).toFixed(2);

    return(
        <>
            <tr className="align-middle">
                <td className="text-center fs-6">{coins.market_cap_rank}</td>
                <td className="text-start fs-6">{description}</td>
                <td className="text-end fw-bolder fs-6">${price}</td>
                <td className="text-end fs-6">${marketCap}</td>
                <td className="text-end fs-6">{supply} {symbol}</td>
                <td className="text-end fs-6">${coins.atl}</td>
                <td className="text-center fw-bold fs-6">${new Intl.NumberFormat().format(coins.ath)}</td>
            </tr>
        </>
    );
}

export default Coins;