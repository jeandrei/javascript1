const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("LISTENEN ON PORT 8080");
})

/* app.use((req,res) => {
    console.log("WE GOT A NEW REQUEST ON PORT 8080");
    res.send("HELLO, WE GOT YOUR REQUEST! THIS IS YOUR RESPONSE");
}); */

app.get('/', (req,res) => {
	res.send('WELCOME TO THE HOME PAGE!!');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing PostId: ${postId} on the ${subreddit} subreddit</h1>`);
})

app.get('/cats', (req,res) => {
    res.send("MEOW!!!")
})

app.get('/dogs', (req,res) => {
    res.send("WOOF!!!")
})
app.post('/cats', (req,res) => {
	res.send('POST REQUEST TO /teste!!! THIS IS DIFFERENT THAN A GET REQUEST');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send('NOTHING FOUND IF NOTHINS SEARCH');
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req,res) => {
    res.send("I don't know that path");
})