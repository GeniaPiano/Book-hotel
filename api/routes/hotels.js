import {Router} from 'express';
import {createHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel} from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const hotelsRouter = Router();

hotelsRouter

    .post('/', verifyAdmin, createHotel)
    .put('/:id', verifyAdmin, updateHotel)
    .delete('/:id', verifyAdmin, deleteHotel)
    .get('/:id', getOneHotel)
    .get('/', getAllHotels);



export default hotelsRouter;