// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Define collection and schema for users
 let users = new Schema({
    
    name: {
        type: String
      },
      email: {
        type: String
      },
      password: {
        type: String
      }
    },{
        collection: 'users'
})
module.exports = mongoose.model('users', users);



