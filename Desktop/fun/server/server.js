const express = require('express');
const mongoose = require('mongoose');
const db = require('../config/connection');
const app = express();
const port = process.env.PORT || 3000;



// Define the TFT Legend schema
const tftLegendSchema = new mongoose.Schema({
  name: String,
  image: String,
  items: [String],
});

const TFTLegend = mongoose.model('tft-legends', tftLegendSchema);

// Define the API routes
app.get('/api/legends', function(req, res) {
  TFTLegend.find(function(err, legends) {
    if (err) return console.error(err);
    res.send(legends);
  });
});
app.get('/', function(req, res) {
    res.send('Welcome to the TFT Legends API');
  });

app.get('/api/legends/:id', function(req, res) {
  TFTLegend.findById(req.params.id, function(err, legend) {
    if (err) return console.error(err);
    res.send(legend);
  });
});

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });