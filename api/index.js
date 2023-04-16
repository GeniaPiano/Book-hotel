import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config();



mongoose.connect('gti restoremongodb://127.0.0.1:27017/booking');


mongoose.connection.on("connected", () => {
    console.log("mongoDB connected.")
});






app.listen(8000, ()=> {
    console.log("Listening on port http://localhost:8000")
})





// const connect = async () => {
//     try {
//         await mongoose.connect("mongodb://127.0.0.1:27017/booking");
//         console.log("Connected to MongoDb")
//     } catch (error) {
//         throw error;
//     }
// };

// mongoose.connection.on("disconnected", () => {
//     console.log("MongoDb disconnected.")
// });
//
// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected.")
// })