const express = require('express');
const app = express();
const Mysql = require('promise-mysql');

MySQL.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'chen06602',
  database: 'bookstore'
}).then(value => (pconn = value));

const statement = `INSERT INTO users (`prefix`,`first_name`,`last_name`,`address`,`height`,`bitcoin_address`,`color_preference`) VALUES ?,?,?,?,?,?,?`;