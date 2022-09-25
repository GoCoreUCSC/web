const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

 router.get('/',async(req,res) => {
    const users = await loadPostsCollection();
    
    res.send(await users.count({user_role: "guide"}).toArray());
 });

 async function loadPostsCollection(){
     const client = await mongodb.MongoClient.connect
     ('mongodb+srv://denuka:3nm8vlNxidugJvQl@gocore.6dk9f.mongodb.net/?retryWrites=true&w=majority', {
         useNewUrlParser: true
     })

    return client.db('gocoredb').collection('users');
 }

module.exports = router;