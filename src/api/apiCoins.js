import axios from "axios";

const cryptoApi = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=true&price_change_percentage=24h%2C7d%2C30d%27&page=1`
});

export default cryptoApi;
