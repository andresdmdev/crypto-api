import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins, selectAllCoins, getStatus, selectSearchedCoin } from "../../../services/slices/dataCryptoSlice";
import Coins from "./Coins";
import CoinSkeletonLoader from "./tbodySections/CoinSkeletonLoader";
import arrayLoader from "../../../helpers/arrayLoaders";

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

    const tableSkeletonLoaders = arrayLoader(10).map(coin => (
        <CoinSkeletonLoader key={nanoid()} />
    ));

    return(
        <tbody>
            {
                status === 'succeeded' ?
                tableCoins : 
                tableSkeletonLoaders
            }
        </tbody>
    );
}

export default TableBody;