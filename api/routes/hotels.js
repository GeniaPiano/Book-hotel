import {Router} from 'express';
import Hotel from'../models/Hotel.js'

const hotelsRouter = Router();

hotelsRouter
    //CREATE
    .post('/', async (req, res)=> {
    const newHotel = new Hotel(req.body)
    try {
    const savedHotel = await newHotel.save();
    res
        .status(200)
        .json(savedHotel);

    } catch(err){
         res
             .status(500)
             .json(err)
        }
    })

    //UPDATE
    .put('/:id', async (req, res) => {
   try {
       const updatedHotel = await Hotel.findByIdAndUpdate(
           req.params.id,
           { $set: req.body },
           { new: true }
           );
       res
           .status(200)
           .json(updatedHotel);
   } catch (err) {
       res
           .status(500)
           .json(err);
   }
    })

    //DELETE
    .delete('/:id', async (req, res) => {

        try {
            await Hotel.findByIdAndDelete(req.params.id);
            res
                .status(200)
                .json(`Hotel has been deleted`);

        } catch(err){
            res
                .status(500)
                .json(err)
        }
    })

    //GET ALL
    .get('/', async (req, res) => {
        try {
            const allHotels = await Hotel.find();
            res
                .status(200)
                .json(allHotels)
        } catch (err) {
            res
                .status(500)
                .json(err)
        }
    })



export default hotelsRouter;