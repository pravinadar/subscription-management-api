import express from 'express';

const router = express.Router();

router.get('/subscriptions', (req, res) => {
    res.send({ title: 'user-subscriptions' });
});

export default router;