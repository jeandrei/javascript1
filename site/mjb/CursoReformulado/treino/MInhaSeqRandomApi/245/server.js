//create const express
const express = require('express');

//create const app express
const app = express();

//create const port
const port = 5000;

//bring the const ideas with json format
const ideas = [
    {
        id: 1,
        text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
        tag: 'Technology',
        username: 'TonyStark',
        date: '2022-01-02',
    },
    {
        id: 2,
        text: 'Milk cartons that turn a different color the older that your milk is getting',
        tag: 'Invention',
        username: 'SteneRogers',
        date: '2022-01-02',
    },
    {
        id: 3,
        text: 'ATM location app wich lets you know where the closest ATM is and if it is in service',
        tag: 'Software',
        username: 'BruceBanner',
        date: '2022-01-02',
    },   
];

app.get('/', (req, res) => {
    res.json({success: true, data: 'This is the root page'});
});

app.get('/api/ideas', (req, res) => {
    res.json({success: true, data: ideas});
});

app.get('/api/ideas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idea = ideas.find((idea) => idea.id === id);
    if(!idea){
        return res.status(404).json({success: false, data: 'Resource not found!'});
    }
    res.json({success: true, data: idea});
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});