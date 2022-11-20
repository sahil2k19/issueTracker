require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file
let DB_URL = process.env.DB_URL;

//connect to the database
mongoose
  .connect(DB_URL, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log(`connection successful `);
  })
  .catch((err) => {
    console.log(`error connecting to database`, err);
  });

// acquire connection (to check if its successful)
// const db = mongoose.connection;
// mongoose.connect('mongodb://localhost/myDB');
// db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// db.once('open', function () {
//   console.log('Connected to Database :: MongoDB');
// });

module.exports = db;
