import { Router } from "express";

const userRouter = Router();

userRouter.get('/profile', (req, res) => {
    res.send({title: 'user-profile'});
});
