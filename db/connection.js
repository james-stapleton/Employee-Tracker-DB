const mysql = require("mysql2");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_NAME,
    port: process.env.MYSQL_PORT
})

//! const seed = fs.readFileSync("../sql/seeds.sql", {encoding: "UTF-8"})


  module.exports = connection;