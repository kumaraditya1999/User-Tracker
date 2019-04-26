const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res)=>{
    //res.send('on home');
    console.log('in home');
});
            
router.get('/:id',(req,res)=>{
    //res.send('on profile');
    console.log('on profile',req.params);
    res.sendFile(path.join(__dirname,'../../dist/User-Tracker/index.html'));
});

router.get('/:id/admin',(req,res)=>{
    //res.send('on admin');
    console.log('on admin',req.params);
    res.sendFile(path.join(__dirname,'../../dist/User-Tracker/index.html'));
});

router.get('*',(req,res)=>{
   // res.send('Invalid');

   console.log('invalid');
   res.sendFile(path.join(__dirname,'../../dist/User-Tracker/index.html'));
})

module.exports = router;