const express = require('express');
const axios = require('axios');
const userRouter = require('./routes/userRouter');
const app = express();
// JSON Parser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});
app.use('/', userRouter);

app.get('/data', async (req, res) => {
    const data = await axios.get('https://reqres.in/api/user?page=2');
    console.log(data.data);
    res.json({ status: 'success', data: data.data });
});

module.exports = app;
