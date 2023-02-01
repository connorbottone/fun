const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/tft-legends', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the TFT Legends database');
});

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

// Start the server
app.listen(port, function() {
  console.log(`TFT Legends API listening on port ${port}`);
});