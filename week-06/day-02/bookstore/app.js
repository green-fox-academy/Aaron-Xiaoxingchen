const express = require('express');
const app = express();
const mysql = require('mysql');
const pMySQL = require('promise-mysql');

app.use(express.json());

app.set('view engine', 'ejs');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'chen06602',
  database: 'bookstore'
})

let pconn;

pMySQL.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'chen06602',
  database: 'bookstore'
}).then(value => (pconn = value));

  connection.connect((err) => {
    if(err){
      return err;
    }
  })

  app.get('/getBookName', function(req, res){
    const SELECT_BOOK_QUERY = 'SELECT book_name FROM book_mast';

    connection.query(SELECT_BOOK_QUERY, (err, results) => {
      if(err){
        res.send(err);
      }else{
        console.log({results});
        res.json({
          books : results
        })
      }
    })
  })

  app.get('/getBookList', async (req, res) => {
    const queryString = 'SELECT book_name FROM book_mast';
    
    try {
      const books = await pconn.query(queryString);
      console.log(books);
      res.render('books', {books})
      
    }
    catch(err) {
      console.log('cannot select car', err);
      res.sendStatus(500);
    }
  })

  app.get('/getBookInfo', async(req, res) =>{
    const QUERY_ALLBOOK_INFO = `SELECT book_name as title,
    aut_name as author,
    cate_descrip as category,
    pub_name as publisher,
    book_price as price
    FROM book_mast
    LEFT JOIN author ON book_mast.aut_id = author.aut_id
    LEFT JOIN category ON book_mast.cate_id = category.cate_id
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id;`;

    try {
      const booksInfo = await pconn.query(QUERY_ALLBOOK_INFO);
      console.log(booksInfo);
      res.render('booksInfo', {booksInfo})
      
    }
    catch(err) {
      console.log('cannot select car', err);
      res.sendStatus(500);
    }
  })

  app.get('/books', async function(req, res){

    const QUERY_FILTER_INFO = `SELECT book_name as title,
    aut_name as author,
    cate_descrip as category,
    pub_name as publisher,
    book_price as price
    FROM book_mast
    LEFT JOIN author ON book_mast.aut_id = author.aut_id
    LEFT JOIN category ON book_mast.cate_id = category.cate_id
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    WHERE cate_descrip = ? ;`;
    
    try {
      const booksInfo = await pconn.query(QUERY_FILTER_INFO, [req.query.category]);
      console.log(booksInfo);
      res.render('booksfilter', {booksInfo})
      
    }
    catch(err) {
      console.log('cannot select car', err);
      res.sendStatus(500);
    }

  })

  app.listen(3000, () => {
    console.log('is listening port');
  })