import React from 'react';
import logo from './logo.svg';
import './App.css';
import HotelFilter from './HotelFilter';
import data from './data';
import HotelList from './HotelList';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hotel Booking</header>
      <div className="container">
        <aside>
        <HotelFilter title="Start Rating" list={data.filters['Star rating']} />
        <HotelFilter title="Property Type" list={data.filters['Property type']}/>
        </aside>
        <main>
          <HotelList list={data.hotels}/>
        </main>
      </div>
    </div>
  );
}

export default App;
