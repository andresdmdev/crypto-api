import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins, selectAllCoins, getError, getStatus, selectSearchedCoin } from "../../../services/slices/dataCryptoSlice";
import Coins from "./Coins";

const TableBody = () => {

    const coins = useSelector(selectAllCoins);
    const searchCoins = useSelector(selectSearchedCoin)
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

        const screen = window.innerWidth > 800 ? 9 : 5

        tableCoins = <tr><td colSpan={screen}>
            <div className="loading">
              <span className="loader"></span>
            </div>
        </td></tr>;

    } else if(status === 'succeeded'){

        const showCoins = searchCoins.length === 0 ? coins : searchCoins

        tableCoins = showCoins.map(coin => (
            <Coins key={coin.id} coin={coin} />
        ));
    } else if(status === 'error'){

        tableCoins = <tr><td colSpan='5'>{error}</td><td colSpan='4'>Reload</td></tr>;
    }

    return(
        <tbody>
            {tableCoins}
        </tbody>
    );
}

export default TableBody;