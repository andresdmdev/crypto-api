import './App.css';
import TableBody from './features/table/TableBody';
import React from "react";
import './features/table/styleTable.css';
import Header from './features/Header';

function App() {
  
  return (
    <div className="App">
      <Header />
      <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col" className='text-center fs-6 fw-bolder'>#</th>
                <th scope="col" className='text-start fs-6 fw-bolder'>Name</th>
                <th scope="col" className='text-end fs-6 fw-bolder'>Price</th>
                <th scope="col" className='text-end fs-6 fw-bolder'>Market Cap.</th>
                <th scope="col" className='text-center fs-6 fw-bolder'>Supply</th>
                <th scope="col" className='text-center fs-6 fw-bolder'>All Time Low</th>
                <th scope="col" className='text-center fs-6 fw-bolder'>All Time High</th>
            </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
}

export default App;
