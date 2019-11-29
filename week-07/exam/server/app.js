const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use(cors());

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'chen06602',
  database: 'exam',
});

function getPolls(req, res){
  var polls = {
    "question": "where should we go for dinner?",
    "options":""
  };

  const queryString = `SELECT * FROM foods`;
  conn.query(queryString, (err, rows) =>{
    if(rows.length !== 0){
      polls["options"] = rows;
      res.json(polls);
    }else{
      polls["options"] = "Not Foods Options";
      res.json(polls);
    }
  })
}

function createPoll(req, res){
  const optionId = parseInt(req.params.optionId);
  const queryString = `UPDATE foods SET votes = votes + 1 WHERE id = ${optionId}`;
  conn.query(queryString, (err, result) => {
    if(err){
      console.log(`can't vote successfully` ,err);
      return res.sendStatus(500);
    }
    res.send('vote successfully');
  });
}


app.get('/poll', getPolls);
app.post('/vote/:optionId', createPoll);



app.listen(3000, () => {
  console.log('The App is Listening 3000');
});