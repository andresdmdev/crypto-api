import axios from "axios";

const newsApi = axios.create({
    baseURL: `https://gnews.io/api/v4/search?q=btc&eth&lang=en&max=8&token=9c7d81f1505a438e7837fd98f08c12a7`
});

export default newsApi;
