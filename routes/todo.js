var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var todo = require('../models/todo');

mongoose.connect('mongodb://localhost/todo');

var db = mongoose.connection;

db.on('error', function(msg){
    console.log("Mongoose Error db todo:" + msg);
});

db.once('open', function(){
    console.log("Mongoose connected to todo");
});

router.get('/all', function(req,res){
    todo.find({}).exec(function(err,data){
        res.json(data);
    });
});

module.exports = router; 