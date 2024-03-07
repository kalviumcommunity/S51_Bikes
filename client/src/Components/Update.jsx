import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';

export default function UpdateData() {
    const { Model } = useParams();
    const navigate = useNavigate();

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [condition, setCondition] = useState('');
    const [mileage, setMileage] = useState('');
    const [location, setLocation] = useState('');
    const [seller, setSeller] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(`https://s51-bikes.onrender.com/patch/${Model}`, {
                Brand: brand,
                Model: model,
                Year: year,
                Price: price,
                Condition: condition,
                Mileage: mileage,
                Location: location,
                Seller: seller
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log('Updated Watch:', response.data);
                navigate('/');
            } else {
                console.error('Update failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error updating watch:', error);
        }
    };

    return (
        <>
            <h2>Update Data</h2>
            <div className="form-container">
                <form className='form' onSubmit={handleSubmit}>
                    <div className='div'>
                        <label htmlFor="Brand">Brand</label>
                        <input type="text" id="Brand" name="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </div>
                    <div className='div'>
                        <label htmlFor="Model">Model</label>
                        <input type="text" id="Model" name="Model" value={model} onChange={(e) => setModel(e.target.value)} />
                    </div>
                    <div className='div'>
                        <label htmlFor="Year">Year</label>
                        <input type="number" id="Year" name="Year" value={year} onChange={(e) => setYear(e.target.value)} />
                    </div>
                    <div className='div'>
                        <label htmlFor="Price">Price</label>
                        <input type="number" id="Price" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='div'>
                        <label htmlFor="Condition">Condition</label>
                        <input type="text" id="Condition" name="Condition" value={condition} onChange={(e) => setCondition(e.target.value)} />
                    </div>
                    <div className='div'>
                        <label htmlFor="Mileage">Mileage</label>
                        <input type="number" id="Mileage" name="Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} />
                    </div>
                    <div className='div'>
                        <label htmlFor="Location">Location</label>
                        <input type="text" id="Location" name="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className='div'>
                        <label htmlFor="Seller">Seller</label>
                        <input type="text" id="Seller" name="Seller" value={seller} onChange={(e) => setSeller(e.target.value)} />
                    </div>
                    <input type="submit" className='submit' value="Submit" />
                </form>
            </div>
        </>
    );
}