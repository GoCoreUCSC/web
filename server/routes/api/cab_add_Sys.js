const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//  router.get('/',async(req,res) => {
//     const posts = await loadPostsCollection();
//     res.send(await posts.find({}).toArray());
//  });
// 
// 
router.post('/', async (req,res)=>{
    const users = await loadPostsCollection();
    await users.insertMany([{
        
        // owner: req.body.owner,
        // vehicle: req.body.vehicle,
        // driver: req.body.driver

        ownerName: req.body.ownerName,
        ownerphoneNumber: req.body.ownerphoneNumber,
        owneraddress: req.body.owneraddress,
        ownercity: req.body.ownercity,
        ownereMail: req.body.ownereMail,
        ownernic: req.body.ownernic,
        
        vehicletype: req.body.vehicletype,
        vehicleregno: req.body.vehicleregno,
        vehicleregYear: req.body.vehicleregYear,
        vehiclechassis: req.body.vehiclechassis,
        vehicleinsuarance: req.body.vehicleinsuarance,

        driverName: req.body.driverName,
        driverbirthdate: req.body.driverbirthdate,
        driverphoneNumber: req.body.driverphoneNumber,
        driveraddress: req.body.driveraddress,
        drivereMail: req.body.drivereMail,
        drivernic: req.body.drivernic,
        driverlicense: req.body.driverlicense,

    }]); 

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