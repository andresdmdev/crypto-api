import axios from "axios";

const newsApi = axios.create({
    baseURL: `https://gnews.io/api/v4/search?q=btc&eth&lang=en&max=8&token=${process.env.REACT_APP_API_KEY}`
});

export default newsApi;
