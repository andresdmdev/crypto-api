import React, { useEffect } from "react";
import {nanoid} from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins, selectAllCoins, getError, getStatus } from "./dataBinanceSlice";
import Coins from "./Coins";

const TableBody = () => {

    const coins = useSelector(selectAllCoins);
    const status = useSelector(getStatus);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCoins());
        }
    }, [status, dispatch])

    let tableCoins;

    if(status === 'loading'){
        tableCoins = <tr><td>Loading...</td><td>Wait a second</td></tr>;
    } else if(status === 'succeeded'){
        const higherCoins = coins.slice().sort((a, b) => {
            let a2 = a.price;
            let b2 = b.price;
            return b2 - a2;
        });
        tableCoins = higherCoins.map(x => (
            <Coins key={nanoid()} coins={x} />
        ));
    } else if(status === 'error'){
        tableCoins = <tr><td>{error}</td><td>Reload</td></tr>;
    }

    return(
        <tbody>
            {tableCoins}
        </tbody>
    );
}

export default TableBody;