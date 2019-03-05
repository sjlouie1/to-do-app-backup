// import React from 'react';
// import App from '../src/App.js';
// import { renderToString } from 'react-dom/server';
// import fs from 'fs';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, POST" );
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

// app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080"); //My frontend APP domain
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27018/to-do-app-original",  {useNewUrlParser: true}); //creating the database

var nameSchema =  mongoose.Schema({
  task: String,
  time: String 
 }, {
   versionKey: false
 });

var Task = mongoose.model("task", nameSchema);


app.use(express.static(path.resolve(__dirname + '/../public')))
// app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname +  '/../public/index.html'))
})

app.get('/tasks', function (req, res) {
  console.log('this is a get at /tasks')
  Task.find({}).exec((err, data) => {
    if (err) {console.log(err)}
    res.status(200).send(data);
  });
  console.log('this is a get request')
});

app.post('/tasks', function(req, res){ //database endpoint
  console.log(req.body, "*******")
  Task.create(req.body, (err,res) =>{
    if(err){
      console.log(err)
    } 
    console.log(res)
  })
  // .then(item => {
  // res.send("item saved to database");
  // })
  // console.log('IS ITEM SAVED?')
  // .catch(err => {
  // res.status(400).send("unable to save to database");
  // });
})

app.listen(8080);
console.log('Node server running on port 8080');  
