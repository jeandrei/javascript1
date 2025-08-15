const path = require('path');
const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
const router = require('./routes/ideas');

require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
connectDB();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({
    origin: ['http://localhost:500', 'http://localhost:3000'],
    credentials: true
}));

app.get('/', (req, res) => {
    res.json({success: true, data: 'This is the root page'});
});

app.use('/api/ideas', router);


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});