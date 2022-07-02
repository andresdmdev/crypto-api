import axios from "axios";

const cryptoApi = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
});

export default cryptoApi;
