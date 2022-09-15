const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const bcrypt = require ('bcrypt');

//  router.get('/',async(req,res) => {
//     const posts = await loadPostsCollection();
//     res.send(await posts.find({}).toArray());
//  });
// 

router.post('/', async (req,res)=>{
    
    const users = await loadPostsCollection();
    await users.insertMany([{
        
        // hotel: req.body.hotel
        user_role: req.body.user_role,
        hotelh_name: req.body.hotelh_name,
        hotelregNo: req.body.hotelregNo,
        hotelphone: req.body.hotelphone,
        hotelcity: req.body.hotelcity,
        hotelpassword: bcrypt.hashSync(req.body.hotelpassword, 10),
        // hashPass(req.body.hotelpassword),
        hotelweb: req.body.hotelweb,
        hotelemail: req.body.hotelemail,
        hoteladdress: req.body.hoteladdress,

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