import React from 'react'
const data = { "Brand": "Yamaha", 
               "Model": "YZF-R6", 
               "Year": 2018, 
               "Price": 55000 ,
               "Condition": "Used",
               "Mileage": 12000 , 
               "Location": "Chennai", 
               "Seller": "Rakshan" }

function Firstinput() {
    return (
        <div>
            <h1>Brand={data.Brand}</h1>
            <h1>Model={data.Model}</h1>
            <h1>Year={data.Year}</h1>
            <h1>Price={data.Price}</h1>
            <h1>Condition={data.Condition}</h1>
            <h1>Milleage={data.Mileage}</h1>
            <h1>Location={data.Location}</h1>
            <h1>Seller={data.Seller}</h1>

        </div>
    )
}

export default Firstinput
