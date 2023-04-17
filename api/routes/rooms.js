import express from 'express'

const roomsRouter = express.Router();

roomsRouter.get('/', (req, res) => {
    res.send("Hello, this is rooms endpoint")
})



export default roomsRouter;
