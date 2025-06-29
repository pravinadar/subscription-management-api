import express from "express";

const router = express.Router();

router.get('/sign-up', (req, res) => {
    res.send({ title: 'sign-up' });
})

export default router;