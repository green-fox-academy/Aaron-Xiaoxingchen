const {Router} = require ('express');
const router = Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'chen06602',
  database: 'reddit',
});

function createPost(req, res) {
  const {title, url} = req.body;
  if(!title || !url){
    return res.sendStatus(400);
  }
  const queryString = `INSERT INTO posts set title = ?, url = ?;`;

  conn.query(queryString, [title, url], (err, result) => {
    if(err) {
      console.log('cannot insert', err);
      return res.sendStatus(500);
    }
    res.send('insert succeed');
  });
}

function getPosts(req, res){
  var posts = {
    "posts":""
  };
  const queryString = `SELECT * FROM posts`
  conn.query(queryString, (err,rows, filed) => {
    if(rows.length !== 0){
      posts["posts"] = rows;
      res.json(posts);
    }else{
      posts["posts"] = 'NOT DATA FOUND';
      res.json(posts);
    }
  })
}

function createVote(score){
  return function(req, res){
    const post_id = parseInt(req.params.id);
    const queryString = `UPDATE posts SET score = score + ? WHERE post_id = ?`
    conn.query(queryString, [score, post_id, post_id], (err, result) => {
      if(err) {
        console.log('cannot update', err);
        return res.sendStatus(500);
      }
      res.send('update succeed');
    });
  }
}

function removePost(req, res){
  const post_id = parseInt(req.params.id);
  const queryString = `DELETE FROM posts WHERE post_id = ?`
  conn.query(queryString, [post_id], (err, result) =>{
    if(err){
      console.log('cannot delete');
      return res.sendStatus(500);
    }
    res.send('delete successfully');
  })
}


router.get('/',getPosts);
router.post('/', createPost);

router.put('/:id/upvote', createVote(1));
router.put('/:id/downvote', createVote(-1));

router.delete('/:id', removePost);

module.exports = router;

