import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Firstinput() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiLink = "https://s51-bikes.onrender.com/get";
        try {
            const response = await fetch(apiLink);
            const databaseData = await response.json();
            setData(databaseData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (model) => {
      const deleteUrl = `https://s51-bikes.onrender.com/delete/${model}`;
      try {
          await fetch(deleteUrl, { method: 'DELETE' });
          // Update the data state after deletion
          fetchData();
      } catch (error) {
          console.error(error);
      }
  };
  

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
                            <button onClick={(e) => handleDelete(item.Model)}>DELETE</button>
                            <Link to={`/updatedata/${item.Model}`}><button>UPDATE</button></Link>
                            <hr />
                        </div>
                    ))}
            </div>
        </div>
    );
}
