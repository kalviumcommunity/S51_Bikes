const express = require('express')
const getRouter = express.Router();
const postRouter = express.Router();
const patchRouter = express.Router();
const deleteRouter = express.Router();
const Secbikes = require("./../models/secbikes.model")
const updateAndPostJoi = require('../validator')


getRouter.get('/get', async (req, res) => {
    try {

        const getBikes = await Secbikes.find(); 
        
        res.status(200).json(getBikes);

        
    } catch (error) {
        console.log(error);

        return res.status(500).send({
            error: 'Something went wrong'
        })
    }
})

postRouter.post('/post', async (req, res) => {
    try {
        const {error, value} = updateAndPostJoi(req.body)
        if(error){
            return res.status(400).json(error.details)
        }
        else{
            const { Brand,Model,Year,Price,Condition,Mileage,Location,Seller  } = req.body;
        const newSecbikes = await Secbikes.create({ Brand,Model,Year,Price,Condition,Mileage,Location,Seller  }); 
        console.log("new", newSecbikes);
        res.status(200).json(newSecbikes);
        }
    } catch(err) {
        console.error(err);
        return res.status(500).send({
            error: 'Something went wrong'
        });
    }
});


patchRouter.patch('/patch/:Model', async (req, res)=>{
    try {
        const{error, value} = updateAndPostJoi(req.body)
        if(error){
            return res.status(400).json(error.details)
        }
        else{
            const { Model } = req.params; 
        const deletedFields = req.body; 

        
        const deletedBikes = await Secbikes.findOneAndUpdate({ Model: Model }, deletedFields, { new: true });

        if (!deletedBikes) {
            return res.status(404).json({ error: 'Bikes not found' });
        }

        
        res.status(200).json(deletedBikes);
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
})


deleteRouter.delete('/delete/:Model', async (req, res)=>{
    try {
        const { Model } = req.params; 
        const deletedFields = req.body; 

       
        const deletedBikes = await Secbikes.findOneAndDelete({ Model: Model }, deletedFields, { new: true });

        if (!deletedBikes) {
            return res.status(404).json({ error: 'Bikes not found' });
        }

        
        res.status(200).json(deletedBikes);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
})

postRouter.post("/login", (req, res) => {
    const {username} = req.body
    res.cookie("username", username)
    res.json(username)
})

getRouter.get("/logout", (req, res)=>{
    res.clearCookie('username')
    res.send('Logout successful')
})




module.exports = {getRouter, postRouter,patchRouter, deleteRouter}
