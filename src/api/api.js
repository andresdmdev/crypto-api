import axios from "axios";

const apiKey = '2d8f87448e60b35d5eac3d0fc2b160018e6c4161';

const cryptoApi = axios.create({
    baseURL: `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}`
});

export default cryptoApi;
