import { Router } from 'express'
import {verifyAdmin} from "../utils/verifyToken.js";
import {createRoom, deleteRoom, getAllRooms, getOneRoom, updateRoom} from "../controllers/room.js";

const roomsRouter = Router();

roomsRouter
    .post('/:hotelId', verifyAdmin, createRoom)
    .put('/:id', verifyAdmin, updateRoom)
    .delete('/:id/:hotelId', verifyAdmin, deleteRoom)
    .get('/:id', getOneRoom )
    .get('/', getAllRooms);



export default roomsRouter;
