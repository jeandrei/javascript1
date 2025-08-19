const express = require('express');
const router = express.Router();



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


router.get('/', (req, res) => {
    res.json({ success: true, data: ideas});
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const idea = ideas.find((idea) => idea.id === id);
    res.json({ success: true, data: idea });
});

/*
Add an idea
when parsing the data in the server.json Body parser middleware we can access the data from the req.body

*/
router.post('/', (req, res) => { 
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10)
    };
    
    ideas.push(idea);
    res.json({sucess: true, data: idea});
});

module.exports = router;