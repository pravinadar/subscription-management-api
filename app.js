import express from 'express';
import 'dotenv/config';

import authRouter from './routes/auth.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'
import userRouter from './routes/user.routes.js'
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import { arcjetMiddleware } from './middlewares/arcjet.middleware.js';

const app = express();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));
// Middleware to parse cookies
app.use(cookieParser())
// Global security middleware (Arcjet)
app.use(arcjetMiddleware)


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