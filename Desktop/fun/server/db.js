const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const legendSchema = new Schema({
  name: { type: String, required: true },
  items: [{ type: String, required: true }],
});

const Legend = mongoose.model('Legend', legendSchema);

const legendData = [
  {
    name: 'Ashe',
    items: ['Runaan\'s Hurricane', 'Infinity Edge', 'Rapid Firecannon'],
  },
  {
    name: 'Jinx',
    items: ['Statikk Shiv', 'Razor Shiv', 'Infinity Edge'],
  },
  {
    name: 'Vayne',
    items: ['Runaan\'s Hurricane', 'Infinity Edge', 'Blade of the Ruined King'],
  },
];

Legend.insertMany(legendData, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Data seeded successfully.');
  }
});