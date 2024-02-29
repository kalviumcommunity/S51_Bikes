// import React from 'react'
// const data = { "Brand": "Yamaha", 
//                "Model": "YZF-R6", 
//                "Year": 2018, 
//                "Price": 55000 ,
//                "Condition": "Used",
//                "Mileage": 12000 , 
//                "Location": "Chennai", 
//                "Seller": "Rakshan" }

// function Firstinput() {
//     return (
//         <div>
//             <h1>Brand={data.Brand}</h1>
//             <h1>Model={data.Model}</h1>
//             <h1>Year={data.Year}</h1>
//             <h1>Price={data.Price}</h1>
//             <h1>Condition={data.Condition}</h1>
//             <h1>Milleage={data.Mileage}</h1>
//             <h1>Location={data.Location}</h1>
//             <h1>Seller={data.Seller}</h1>

//         </div>
//     )
// }

// export default Firstinput


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Firstinput() {
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
        console.error(error);``
      }
    };
  
    const [count, setCount] = useState(0);
  
    return (
      <div className="container">
        <Link to='/postdata'><button>ADD</button></Link>
      
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
                <hr></hr>
              </div>
            ))}
        </div>
      </div>
    );
}

