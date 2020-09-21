const mongoose = require('mongoose');

// Database URL
const URI = 'mongodb://localhost/mern-tasks';

// Connect to database
mongoose.connect(URI)
    .then(db => console.log('Connected to databse'))
    .catch(err => console.log(err));


// Export module
module.export = mongoose;