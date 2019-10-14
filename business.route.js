// business.route.js

const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('./business.model');


// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
  Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});


module.exports = businessRoutes;