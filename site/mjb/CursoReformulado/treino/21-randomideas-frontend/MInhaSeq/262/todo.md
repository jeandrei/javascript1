Go to the back end routers in the ideas.js
Go to the router.delete
We're gonna check if the user can delete the idea
befor the await
const idea = await Idea.findById(req.params.id);
if(idea.username ===  req.body.username){
    //then we procede with the delete
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {}});
} else {
    res.status(403).json({ success: false, error: 'You are not authorized to delete this resource' });
}  

Do the same thing for update

Vai ficar assim
try {
        const idea = await Idea.findById(req.params.id);
        if(idea.username ===  req.body.username){
             const updateIdea = await Idea.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    text: req.body.text,
                    tag: req.body.tag
                },
            },
            { new: true }
            );    
            return res.json({ success: true, data: updateIdea });        
        } 
            
        res.status(403).json({ success: false, error: 'You are not authorized to update this resource' });
          
} catch (error) {
    res.status(500).json({success: false, error: 'Something went wrong'});
}

Restart the back end server

Com o postman tente fazer um update com e sem o username
o mesmo com o delete
