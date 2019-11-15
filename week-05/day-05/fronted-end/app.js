'use strict'

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('assets'));

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) =>{
  if(req.query.input){
    res.send({
      received: req.query.input,
      result: req.query.input * 2,
    })
  }else{
    res.send({
        "error": "Please provide an input!"
      })
    }
})

app.get('/greeter', (req, res) =>{
  if(req.query.name && req.query.title){
    res.send({
      welcome_message:`Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  }else if(req.query.name){
    res.send({
      error: "Please provide a title!"
    })
  }else if(req.query.title){
    res.send({
      error: "Please provide a name!"
    })
  }else{
    res.send({
      error: "Please provide a name and a title!"
    })
  }
})

app.get('/appenda:/appendable', (req, res) => {
  const { appendable } = req.params;
  res.send({ appended: `${appendable}a` })
})

function factor(n){
  while(n >= 1){
    n*(n-1);
    n--;
  }
}
app.post('/dountil/:action', function (req, res) {
  const{action} = req.params;
  const {param} = req.body;
  if(param){
    if(action === 'sum'){
      res.send({
        result: 3* param
      });
    }else if(action === 'factor'){
      res.send({
        result: factor(param)
      })
    }
  }else{
    res.send({
      error: "please provide a number"
    })
  }
});

app.listen('3000', ()=> 
  console.log('the app is listening 3000'))