import Room from '../models/Rooms.js';
import Hotel from '../models/Hotel.js'
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            })
        } catch (err) {
            next(err)
        }

        res.status(200).json(savedRoom);

    } catch (err) {
        next(err)
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );

    } catch (err) {
        next(err);
    }
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId

    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull : { rooms: req.params.id }
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json(`Room has been deleted`);
    } catch(err){
       next(err)
    }
}

export const getOneRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
}

export const getAllRooms = async (req, res, next) => {
    try {
        const allRooms = await Room.find();
        res.status(200).json(allRooms);
    } catch (err) {
        res.status(500).json(err)
    }
}