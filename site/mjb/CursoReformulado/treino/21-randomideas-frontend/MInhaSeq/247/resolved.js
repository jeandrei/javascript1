//IDEAS.JS
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


//Get all ideas
router.get('/', (req, res) => {
    res.json({ success: true, data: ideas });
});

//Get one idea +req.params.id é para converter de string para número
router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    
    if(!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found'});
    }
    res.json({ success: true, data: idea });
});




module.exports = router;


//SERVER.JS
const express = require('express');

const port = 5000;

const app = express();

const ideasRouter = require('./routes/ideas');

app.get('/', (req, res) => {
    res.send({message: 'Welcome to the RandomIdeas API'});
});

app.use('/api/ideas', ideasRouter);


app.listen(port, () => {
    console.log(`Server listining on port ${port}`);
});