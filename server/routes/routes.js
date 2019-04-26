const express = require('express');
const path = require('path');
const axios = require('axios');

const router = express.Router();

router.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'../../dist/User-Tracker/index.html'));
})

module.exports = router;