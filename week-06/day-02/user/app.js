const Mysql = require('mysql');
const fs = require('fs');
const csv = require('fast-csv');

let stream = fs.createReadStream('users.csv');
let myData = [];
let csvStream = csv
  .parse()
  .on("data", function(data){
    myData.push(data);
  })
  .on("end", function(){
    myData.shift();

    const connection = Mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'chen06602',
      database: 'bookstore'
    })

    connection.connect((error) =>{
      if(error){
        console.error(error);
      }else{
        let query = `INSERT INTO users (prefix,first_name,last_name,address,height,bitcoin_address,color_preference) VALUES ?`;
        connection.query(query, [myData], (error, response) =>{
          console.log(error || response)
        })
      }
    })
  })

stream.pipe(csvStream);
