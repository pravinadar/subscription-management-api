import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Subscription Tracker API is running!');
})

app.listen(process.env.PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});