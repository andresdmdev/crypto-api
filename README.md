# Cryptocurrency API with React.js

<center><img src="/img/crypto.png" alt="crypto"/></center>

This app shows a list of cryptocurrencies from CoinGecko platform with its actual market price. When It does a request to the CoinGecko API, it sorts data from highest to lowest price, with a sort method. Besides, It calls each element of the array, with a map method, mounting every component with its props. Then, It evaluates, with RegExp, every component with pair USDT and higher than 1 USDT, to represent a row in the list and show the result.

## Stack used for this project

### Node.js and NPM for JavaScript runtime environment and package management.

### React.js as a Front-End library to build interactive user interfaces. I used state Hooks to store data from the api and handle conection errors.

### Axios library to handle asynchronous REST API requests using useEffect Hook.

### CSS3 for styling and HTML5 for the layout.


### [DEMO](https://andres-webdev.github.io/crypto-api/)
