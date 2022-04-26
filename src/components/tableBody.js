import React, { useEffect, useState } from "react";
import Coins from "./coins";

const TableBody = () => {

    const [coins, setCoins] = useState([]);

    const getData = async () => {
        const data = await fetch('https://api.binance.com/api/v3/ticker/price')
        const user = await data.json()
        setCoins(user)
    };

    useEffect(() => {
        
        setInterval(() => {
            getData()
        }, 5000);
        
    },[]);

    return(
        <tbody>
            {
                coins.sort(function(a,b){
                    let a2 = a.price;
                    let b2 = b.price;
                    return b2 - a2;
                }).map(element =>
                    <Coins key={element.symbol} coins={element} />
                )
            }
        </tbody>
    );
}

export default TableBody;