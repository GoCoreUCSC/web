const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

 router.get('/',async(req,res) => {
    const users = await loadPostsCollection();
    res.send(await users.find({user_role:"guide"}).toArray());
 });

 router.delete('/', async (req,res)=>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.status(200).send();
});

 async function loadPostsCollection(){
     const client = await mongodb.MongoClient.connect
     ('mongodb+srv://denuka:3nm8vlNxidugJvQl@gocore.6dk9f.mongodb.net/?retryWrites=true&w=majority', {
         useNewUrlParser: true
     })

    return client.db('gocoredb').collection('users');
 }

module.exports = router;