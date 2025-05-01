const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
});

app.get('/coinFlip', function(req, res) {
  const times = parseInt(req.query.times) || 1; // Default to 1 if not provided
  const results = []; // Create an empty array to hold the results

  // Perform the coin flip the specified number of times
  for (let i = 0; i < times; i++) {
    const result = Math.floor(Math.random() * 2); // 0 or 1
    results.push(result === 0 ? 'Heads' : 'Tails'); // Push the result into the results array
  }

  // Respond with a JSON object containing the results array under the key "result"
  res.status(200).json({
    result: results // Change the key to "result"
  });
});

app.get('/diceRoll', function(req, res) {
  const times = parseInt(req.query.times) || 1; // Default to 1 if not provided
  const results = []; // Create an empty array to hold the results

  // Roll the dice the specified number of times
  for (let i = 0; i < times; i++) {
    const result = Math.floor(Math.random() * 6) + 1; // Roll the dice (1 to 6)
    results.push(result); // Push the result into the results array
  }

  // Respond with a JSON object containing the results array under the key "result"
  res.status(200).json({
    result: results // Change the key to "result"
  });
});

app.get('/randomNumber', function(req, res) {
  const min = parseInt(req.query.min) || 1; // Default to 1 if not provided
  const max = parseInt(req.query.max) || 100; // Default to 100 if not provided

  // Check if min is greater than or equal to max
  if (min >= max) {
    return res.status(400).json({
      error: 'Min should be less than max.'
    });
  }

  // Generate a random number between min and max inclusively
  const result = Math.floor(Math.random() * (max - min + 1)) + min; // min to max

  // Respond with a JSON object
  res.status(200).json({
    result: result
  });
});