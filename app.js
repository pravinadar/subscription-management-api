import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Subscription Tracker API is running!');
})

app.listen(3000, () => {
    console.log('API is running on http://localhost:3000');
});