import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Firstinput() {
    const [data, setData] = useState(null);
    const [creators, setCreators] = useState([]);
    const [selectedCreator, setSelectedCreator] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        extractCreators();
    }, [data]);

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

    const extractCreators = () => {
        if (data) {
            const uniqueCreators = [...new Set(data.map(item => item.createdby))];
            setCreators(uniqueCreators);
        }
    };

    const handleDelete = async (model) => {
        const deleteUrl = `https://s51-bikes.onrender.com/delete/${model}`;
        try {
            await fetch(deleteUrl, { method: 'DELETE' });
            // Update the data state after deletion
            setData(data.filter(item => item.Model !== model));
        } catch (error) {
            console.error(error);
        }
    };

    const handleCreatorChange = (event) => {
        setSelectedCreator(event.target.value);
    };

    const filteredData = selectedCreator ? data.filter(item => item.createdby === selectedCreator) : data;

    return (
        <div className="container">
            <Link to='/postdata'><button>ADD</button></Link>
            <div>
                <div>
                    <label htmlFor="creator">Filter by Creator:</label>
                    <select id="creator" value={selectedCreator} onChange={handleCreatorChange}>
                        <option value="">All</option>
                        {creators.map(creator => (
                            <option key={creator} value={creator}>{creator}</option>
                        ))}
                    </select>
                </div>
                {filteredData &&
                    filteredData.map((item, index) => (
                        <div key={index} className="item">
                            <h1>Brand={item.Brand}</h1>
                            <h1>Model={item.Model}</h1>
                            <h1>Year={item.Year}</h1>
                            <h1>Price={item.Price}</h1>
                            <h1>Condition={item.Condition}</h1>
                            <h1>Mileage={item.Mileage}</h1>
                            <h1>Location={item.Location}</h1>
                            <h1>Seller={item.Seller}</h1>
                            <h1>Creator={item.createdby}</h1>
                            <button onClick={(e) => handleDelete(item.Model)}>DELETE</button>
                            <Link to={`/updatedata/${item.Model}`}><button>UPDATE</button></Link>
                            <hr />
                        </div>
                    ))}
            </div>
        </div>
    );
}
