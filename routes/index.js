var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

// GET bird creation form
router.get('/birds/create', function(req, res, next) {
  res.render('createBirdForm', { title: 'Create Bird' });
});

// POST bird creation form data
router.post('/birds/create', function(req, res, next) {
  // Extract data from the form submission
  const { species, nickname, status } = req.body;
  
  // Create a bird object with the submitted data
  const bird = {
    species: species,
    nickname: nickname,
    status: status
  };
  
  // Log the bird object
  console.log(bird);
  
  // Redirect to the confirmation view
  res.render('birdCreated', { title: 'Bird Created', bird: bird });
});

module.exports = router;

