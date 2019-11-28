const mysql = require('mysql');
const {Router} = require('express');
const router = Router();

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'chen06602',
  database: 'reddit',
})

function getUsers(req, res){
  var users = {
    "users":""
  };
  const queryString = `SELECT * FROM users`
  conn.query(queryString, (err,rows, filed) => {
    if(rows.length !== 0){
      users["users"] = rows;
      res.json(users);
    }else{
      users["users"] = 'NOT DATA FOUND';
      res.json(users);
    }
  })
}

function createUser(req, res){
  const {name, password} = req.body;
  
  if(!name || !password) {
    return res.sendStatus(400)
  }
  const queryString = `INSERT INTO users set user_name = ?, user_password = ?;`;

  conn.query(queryString, [name, password], (err, result) => {
    if(err) {
      console.log('cannot insert', err);
      return res.sendStatus(500);
    }
    res.send('insert succeed');
  });
}

router.get('/', getUsers);
router.post('/', createUser);

module.exports = router; 






