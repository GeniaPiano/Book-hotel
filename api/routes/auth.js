import express from 'express'

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.send("Hello, this is auth endpoint")
})



export default authRouter;
