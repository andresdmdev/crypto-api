import React from "react";

const Coins = ({ coins }) => {

    const reg = new RegExp(/\w(?=USDT)|ETH(?=USDT)/);
    const test = reg.test(coins.symbol);
    
    const price = Number(coins.price).toFixed(2);

    const usdtEval = test && price > 1;

    return(
        <>
            { usdtEval && <tr><td>{coins.symbol}</td><td>{price}</td></tr> }
        </>
    );
}

export default Coins;