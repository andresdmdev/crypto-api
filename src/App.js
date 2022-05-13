import './App.css';
import TableBody from './features/table/TableBody';
import React from "react";

function App() {
  
  return (
    <div className="App">
      <h1>Crypto Quotation</h1>
      <table>
        <thead>
          <tr>
            <th>Ticker Symbol</th>
            <th>Market Price</th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
}

export default App;
