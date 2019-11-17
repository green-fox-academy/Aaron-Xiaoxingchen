'use strict'

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
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

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  res.send({ appended: `${appendable}a` })
})

app.post('/dountil/:action', function (req, res) {
  const{action} = req.params;
  let {until} = req.body;
  until = parseInt(until, 10);
  if(until){
    if(action === 'sum'){
      res.send({
        result: 3* until
      });
    }else if(action === 'factor'){
      res.send({
        result: factor(until)
      })
    }
  }else{
    res.send({
      error: "please provide a number"
    })
  }
});

function factor(n){
  var sum = 1;
  while(n >= 1){
    sum = sum * n;
    n--;
  }
  return sum;
}

app.post('/arrays', function(req, res){
  const {what, numbers} = req.body;
  let result = null;
  switch(what){
    case 'sum':
      result = {result: numbers.reduce((a,b) => a + b)};
      break;
    case 'multiply':
      result = {result: numbers.reduce((a ,b) => a*b)};
      break;
    case 'double':
      result = {result: numbers.map((a) => a * 2)};
      break;
    default:
      result = {"error": "Please provide what to do with the numbers!"};
  }
  res.send(result);
})

app.listen('3000', ()=> 
  console.log('the app is listening 3000'))

app.post('/sith', function(req, res){
  const {text} = req.body;
  if(text){
    res.json({sith_text : `${reverse(text)}`});
  }else{
    res.json({  error: "Feed me some text you have to, padawan young you are. Hmmm."
  })
  }
})

function reverse(text){
  let words = text.split(' ');
  for(let i = 0; i < words.length - 1; i+=2){
    if(words[i].indexOf('.') > -1){
      words[i] += ' uhmm.';
    }else if(words[i+1].indexOf('.') < 0){
      [words[i], words[i+1]] = [words[i+1], words[i]];
      if(words[i+1][0] === words[i+1][0].toUpperCase()){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        words[i+1] = words[i+1][0].toLowerCase() + words[i+1].slice(1);
      }
    }
  }
  return `${words.join(' ')} Err..err.err.`;
}