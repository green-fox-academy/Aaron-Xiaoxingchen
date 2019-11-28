const mysql = require('mysql');
const {Router} = require('express');
const router = Router();
//const {Router} = require('express');
//const router = Router();

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'chen06602',
  database: 'reddit',
});

function getVotes(req, res){
    
    var votes = {
      "votes":""
    };
    const queryString = `SELECT user_name, title, score from votes 
    JOIN users ON votes.user_id = users.user_id 
    JOIN posts ON posts.post_id = votes.post_id`;
    conn.query(queryString, (err,rows, filed) => {
      if(rows.length !== 0){
        votes["votes"] = rows;
        res.json(votes);
      }else{
        votes["votes"] = 'NOT DATA FOUND';
        res.json(votes);
      }
    })
}

router.get('/', getVotes)

module.exports = router;


