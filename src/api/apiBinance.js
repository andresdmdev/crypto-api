import axios from "axios";

const binance = axios.create({
    baseURL: 'https://api.binance.com/api/v3/ticker/price'
});

export default binance;