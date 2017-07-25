const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  res.render('hello', { name: 'Phranklyn'});
});

router.get('/reverse/:text', (req, res) => {
  const reversed = req.params.text.split('').reverse().join('');
  res.json({
    text: req.params.text,
    reverse: reversed
  });
});

module.exports = router;
