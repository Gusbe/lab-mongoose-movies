var express = require('express');
var router = express.Router();
const Celebrity = require('./../models/celebrity');



// GET '/celebrities/new'
router.get('/new', (req, res, next) => {
  
  res.render('celebrities/new');

});

// GET '/celebrities/celebrityId/edit'
router.get('/:celebrityId/edit', (req, res, next) => {
  
  const { celebrityId } = req.params;

  Celebrity.findById( celebrityId )
    .then( (celebrity) => res.render('celebrities/edit', { celebrity }))
    .catch( (err) => console.log(err));


});


// POST '/celebrities/celebrityId/delete'
router.post('/:celebrityId/delete', (req, res, next) => {
  
  const { celebrityId } = req.params;

  Celebrity.findOneAndDelete({_id: celebrityId} )
    .then( (celebrity) => res.redirect('/celebrities'))
    .catch( (err) => console.log(err));

});

// POST '/celebrities/celebrityId'
router.post('/:celebrityId', (req, res, next) => {
  
  const { celebrityId } = req.params;
  const {name, occupation, catchPhrase} = req.body;

  Celebrity.findOneAndUpdate({ _id: celebrityId }, { $set: {name, occupation, catchPhrase} }, {new: true})
    .then( (celebrity) => res.redirect('/celebrities'))
    .catch( (err) => console.log(err));

});


// GET '/celebrities/celebrityId'
router.get('/:celebrityId', (req, res, next) => {
  
  const { celebrityId } = req.params;

  Celebrity.findById( celebrityId )
    .then( (celebrity) => res.render('celebrities/show', { celebrity }))
    .catch( (err) => console.log(err));

});


// POST '/celebrities'
router.post('/', (req, res, next) => {

  const {name, occupation, catchPhrase} = req.body;

  const newCelebrity = new Celebrity({name, occupation, catchPhrase});

  newCelebrity.save()
    .then( (celebrity) => res.redirect('/celebrities'))
    .catch( (err) => console.log(err));
  
  
});


// GET '/celebrities'
router.get('/', (req, res, next) => {
  
  Celebrity.find({})
    .then( (allTheCelebritiesFromDB) => {

      res.render('celebrities/index', {allTheCelebritiesFromDB})
      
    })
    .catch( (err) => console.log(err));
});


module.exports = router;