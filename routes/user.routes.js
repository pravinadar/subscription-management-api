import express from "express";

const userRouter = express.Router();

userRouter.get('/profile', (req, res) => {
    res.send({title: 'user-profile'});
});
