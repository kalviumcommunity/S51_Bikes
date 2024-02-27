import React, { useState, useEffect } from 'react';
import './App.css';
import Firstinput from './Components/Firstinput';

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiLink = "https://s51-bikes.onrender.com/get";
    try {
      const database = await fetch(apiLink);
      const databaseData = await database.json();
      setData(databaseData);
      console.log(databaseData);
    } catch (error) {
      console.error(error);
    }
  };

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div>Hello world</div>
    
      <div>
        {data &&
          data.map((item, index) => (
            <div key={index} className="item">
              <h1>Brand={item.Brand}</h1>
              <h1>Model={item.Model}</h1>
              <h1>Year={item.Year}</h1>
              <h1>Price={item.Price}</h1>
              <h1>Condition={item.Condition}</h1>
              <h1>Mileage={item.Mileage}</h1>
              <h1>Location={item.Location}</h1>
              <h1>Seller={item.Seller}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
