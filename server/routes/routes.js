const express = require('express');
const path = require('path');
var User = require('../models/user');
var Activity = require('../models/activity');

const router = express.Router();

router.get('/info/:id',(req,res)=>{
   console.log("here");
   console.log(req.params);
   User.findOne({"id" : req.params.id}).then(result=>{
      if(result){
         res.send(result.activities);
      }else{
         res.send([]);
      }
      
   });
});

router.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'../../dist/User-Tracker/index.html'));
});

router.post('/add',(req,res)=>{

   //find User
   User.findOne( {"id" :req.body.id} ).then(result=>{
      console.log(result);
      if(result){
         console.log("User found");
         var activities = result.activities;
         activities.push(req.body.activity);

         User.findOneAndUpdate({"id":req.body.id},{"activities":activities})
            .then((result,err)=>{
               if(err){
                  console.log(err);
                  res.send({message: "Unuccessfull"});
               }else{
                  console.log("The activity was added to the data base");
                  res.send({message: "Successfully added"});
               }
            });
         
      }else{
         console.log("User not found");
         var newUser = new User({
            id: req.body.id,
            activities: [req.body.activity],
         });

         newUser.save()
            .then((result,err)=>{
               if(err){
                  console.log(err);
                  res.send({message: "Unuccessfull"});
               }else{
                  console.log("User was added to data base");
                  res.send({message: "Successfully added"});
               }
            });
      }

   });
});

module.exports = router;