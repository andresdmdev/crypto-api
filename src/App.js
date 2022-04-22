import './App.css';
import TableBody from './components/tableBody';
import React, { useState } from "react";

function App() {
  
  return (
    <div className="App">
      <h1>Cryptop Quotation</h1>
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
