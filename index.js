const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

const authRoute = require('./routes/auth')

mongoose.connect(
    process.env.DB_HOST, 
    { useNewUrlParser: true},
    () => console.log("Connected to DB")
)


app.use(express.json())

app.use('/api/user', authRoute)

app.listen(3000, () => console.log("up and running"))