
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name:  String,  
  author:  String,  
  size:   Number,  
  views: { 
    type: Number, default: 0 
    },
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;

