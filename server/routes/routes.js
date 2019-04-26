const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('on home');
});
            
router.get('/:id',(req,res)=>{
    res.send('on profile');
    console.log(req.params);
});

router.get('/:id/admin',(req,res)=>{
    res.send('on admin');
    console.log("here",req.params);
});

module.exports = router;