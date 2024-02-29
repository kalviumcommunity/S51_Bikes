import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Post() {
    const [Brand, setBrand] = useState('');
const [Model, setModel] = useState('');
const [Year, setYear] = useState(0);
const [Price, setPrice] = useState(0);
const [Condition, setCondition] = useState('');
const [Mileage, setMileage] = useState(0);
const [Location, setLocation] = useState('');
const [Seller, setSeller] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://s51-bikes.onrender.com/post", { Brand, Model, Year, Price, Condition, Mileage, Location, Seller })
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
};

  return (
    <div>
      <h2>Add a New Bike</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input type="text" name="Brand" onChange={(e)=>setBrand(e.target.value)} />
        </label>
        <br />
        <label>
          Model:
          <input type="text" name="Model" onChange={(e)=>setModel(e.target.value)}/>
        </label>
        <br />
        <label>
          Year:
          <input type="number" name="Year"onChange={(e)=>setYear(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="Price"onChange={(e)=>setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Condition:
          <input type="text" name="Condition" onChange={(e)=>setCondition(e.target.value)}/>
        </label>
        <br />
        <label>
          Mileage:
          <input type="number" name="Mileage" onChange={(e)=>setMileage(e.target.value)}/>
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="Location"onChange={(e)=>setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Seller:
          <input type="text" name="Seller" onChange={(e)=>setSeller(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
