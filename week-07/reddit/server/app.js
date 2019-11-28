//require('./dotenv').config;
const express = require('express');
const cors = require('cors');
const app = express();
const { users, posts, votes } = require('./routes');

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use('/static', express.static('static'));

app.use('/users', users);
app.use('/posts', posts);
app.use('/votes', votes);


app.listen(3000, () =>{
  console.log("this app is listening");
})

