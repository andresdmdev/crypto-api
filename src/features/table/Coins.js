import React from "react";

const Coins = ({ coins }) => {
    
    /* Price */
    const price = Number(coins.price).toFixed(2);
    const resultPrice = new Intl.NumberFormat().format(price);

    /* All time high */
    const high = Number(coins.high).toFixed(2);
    const resultHigh = new Intl.NumberFormat().format(high);

    /* Market Cap */
    const cap = Number(coins.market_cap).toFixed(2);
    const marketCap = new Intl.NumberFormat().format(cap); 

    /* Image */
    const img = <img src={coins.logo_url} alt={coins.symbol} className="me-2" style={{ width: '30px', height: '30px' }} />

    /* Name and Symbol */
    const name = <span className="me-2">{coins.name}</span>
    const symbol = <span className="fw-bold">{coins.symbol}</span>
    const description = <div className="text-start">{img}{name}{symbol}</div>;

    /* Supply */
    const coinsSupplied = Number(coins.circulating_supply).toFixed(2);
    const supply = new Intl.NumberFormat().format(coinsSupplied);

    /* Domminance */
    const dominance = (coins.market_cap_dominance * 100).toFixed(2);

    return(
        <>
            <tr className="align-middle">
                <td className="text-center fs-6">{coins.rank}</td>
                <td className="text-start fs-6">{description}</td>
                <td className="text-end fw-bolder fs-6">${resultPrice}</td>
                <td className="text-end fs-6">${marketCap}</td>
                <td className="text-end fs-6">{supply} {symbol}</td>
                <td className="text-end fs-6">${resultHigh}</td>
                <td className="text-center fw-bold fs-6">{dominance}%</td>
            </tr>
        </>
    );
}

export default Coins;