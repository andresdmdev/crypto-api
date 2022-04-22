import React from "react";

function Coins(props){

    const handleCoins = () => {
        
        let price = Number(props.coins.price);
        price.toFixed(2);
    
        let symbols = props.coins.symbol;
    
        let reg = new RegExp(/\w(?=USDT)|ETH(?=USDT)/g);
        let reg2 = reg.test(symbols);    
    
        let max = price > 1;
    
        if (reg2 && max){
           const data = (<tr key={symbols}><td>{symbols}</td><td>{price}</td></tr>);
           return data;
        }
    }

    return(
        handleCoins()
    );
    
}

export default Coins;