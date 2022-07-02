import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoins, selectAllCoins, getError, getStatus } from "./dataCryptoSlice";
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
        tableCoins = <tr><td colSpan='7'><div className="d-flex justify-content-center w-100 p-3"><div className="spinner-border" role="status"><span className="visually-hidden">...</span></div><span className="ms-3">Loading</span></div></td></tr>;
    } else if(status === 'succeeded'){
        tableCoins = coins.map(x => (
            <Coins key={x.market_cap_rank} coins={x} />
        ));
    } else if(status === 'error'){
        tableCoins = <tr><td colSpan='4'>{error}</td><td colSpan='3'>Reload</td></tr>;
    }

    return(
        <tbody>
            {tableCoins}
        </tbody>
    );
}

export default TableBody;