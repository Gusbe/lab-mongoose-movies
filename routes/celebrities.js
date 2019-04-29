var express = require('express');
var router = express.Router();
const Celebrity = require('./../models/celebrity');

// GET '/celebrities'
router.get('/', (req, res, next) => {
  
  Celebrity.find({})
    .then( (allTheCelebritiesFromDB) => {
      
      res.render('celebrities/index', {allTheCelebritiesFromDB})
      
    })
    .catch( (err) => console.log(err));
});

module.exports = router;