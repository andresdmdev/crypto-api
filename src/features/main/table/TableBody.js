import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins, selectAllCoins, getStatus, selectSearchedCoin } from "../../../services/slices/dataCryptoSlice";
import Coins from "./Coins";

const TableBody = () => {

    const coins = useSelector(selectAllCoins);
    const searchCoins = useSelector(selectSearchedCoin)
    const status = useSelector(getStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchCoins());
        }
    }, [status, dispatch])

    const showCoins = searchCoins.length === 0 ? coins : searchCoins

    const tableCoins = showCoins.map(coin => (
        <Coins 
            key={coin.id} 
            coin={coin} 
        />
    ));

    return(
        <tbody>
            {tableCoins}
        </tbody>
    );
}

export default TableBody;