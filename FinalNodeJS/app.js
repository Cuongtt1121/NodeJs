
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const songRoutes = require('./routes/songRoutes');

const app = express();


mongoose.connect('mongodb://localhost:27017/CRUD', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.json());


app.use('/', songRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
