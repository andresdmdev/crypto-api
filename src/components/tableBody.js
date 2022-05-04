import React, { useEffect, useState } from "react";
import Coins from "./coins";
import binance from "../api/api-binance";

const TableBody = () => {

    const [coins, setCoins] = useState([]);

    const [error, setError] = useState(null);

    async function getData(){
        
        const response = await binance.get('')
            .catch(error => {setError(error); console.log(error)});
        
        setCoins(response.data);
    };

    useEffect(() => {
        
        setInterval(() => {
           getData();
        }, 5000);
        
    },[]);

    if(error) return `Error: ${error.message}`;

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