import express from 'express';
import 'dotenv/config';

import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import userRouter from './routes/user.routes.js'
import connectDB from './config/connectDB.js';

const app = express();

const PORT = process.env.PORT;

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
    res.send('Subscription Tracker API is running!');
})

app.listen(process.env.PORT, async () => {
    console.log(`API is running on http://localhost:${PORT}`);

    await connectDB();
});