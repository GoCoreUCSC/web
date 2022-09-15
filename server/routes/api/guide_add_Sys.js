const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const bcrypt = require ('bcrypt');

//  router.get('/',async(req,res) => {
//     const posts = await loadPostsCollection();
//     res.send(await posts.find({}).toArray());
//  });
// 
// 
router.post('/', async (req,res)=>{
    const users = await loadPostsCollection();
    await users.insertMany([{
        
        user_role: req.body.user_role,
        guidefname: req.body.guidefname,
        guidenic: req.body.guidenic,
        guidephone: req.body.guidephone,
        guidepassword: bcrypt.hashSync(req.body.guidepassword, 10),
        guideemail: req.body.guideemail,
        guideaddress: req.body.guideaddress,
    }]); 

    // res.json({previewFiles: req.previewFiles});

    res.status(201).send();
    // try{
    //     await guide_reg.save
    //     console.log(guide_reg)
    // }catch(err){
    //     res.status(201).send();
    // }

});


// router.delete('/', async (req,res)=>{
//     const posts = await loadPostsCollection();
//     await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
//     res.status(200).send();
// });

 async function loadPostsCollection(){
     const client = await mongodb.MongoClient.connect
     ('mongodb+srv://denuka:3nm8vlNxidugJvQl@gocore.6dk9f.mongodb.net/?retryWrites=true&w=majority', {
         useNewUrlParser: true
     })

    return client.db('gocoredb').collection('users');
 }

module.exports = router;