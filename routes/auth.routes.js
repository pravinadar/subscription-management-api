import express from "express";

const authRouter = express.Router();    

authRouter.get('/sign-up',(req,res)=>{
    res.send({title: 'sign-up'});
})