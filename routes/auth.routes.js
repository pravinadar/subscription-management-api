import { Router } from "express";

const authRouter = Router();    

authRouter.get('/sign-up',(req,res)=>{
    res.send({title: 'sign-up'});
})