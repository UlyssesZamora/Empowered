const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);
const dotenv = require("dotenv");
// import mysql, { Connection, createPool, Pool } from "mysql";
var mysql = require('mysql');
// Peer

const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/peerjs", peerServer);

// import dotenv from "dotenv";
// import mysql, { Connection, createPool, Pool } from "mysql";
//const dataSource = DATA_SOURCE.mySqlDataSource;
let pool = mysql.createPool({});
let sqlInsert = "";
let sql = "";
let conn;

require('dotenv').config();

try {
    pool = mysql.createPool({
      connectionLimit: 20, // Maximum X concurrent connections before waiting for a release
      host: process.env.MY_SQL_DB_HOST,
      user: process.env.MY_SQL_DB_USER,
      password: process.env.MY_SQL_DB_PASSWORD,
      database: process.env.MY_SQL_DB_DATABASE,
    });
    console.log(
      "MySQL Connection Pool generated for",
      process.env.MY_SQL_DB_USER
    );
  } catch (err) {
    console.error(err);
  }
  
  conn = pool.getConnection(function (err, conn) {
    if (err) {
      console.error(err);
    } else {
      console.log(
        "Connected to",
        process.env.MY_SQL_DB_DATABASE,
        "on port",
        process.env.MY_SQL_DB_PORT
      );
    }
  });



app.get("/", async (req, res) => {
    var newID = ''
    var id = '';
    var sql = 'SELECT uuid FROM roomID'
    pool.query(sql, id, async (err, results) => {
        if (err) {
          throw err;
        }
        console.log("res: ",results)
        len = results.length
        if(len == 0){
            newID = uuidv4();
            var sql2 = 'INSERT INTO roomID (uuid) VALUES ('+ "'" + newID + "')"
            console.log(sql2)
            pool.query(sql2, id, async (err, results) => {
                if (err) {
                  throw err;
                }
                res.redirect(`/${newID}`);
                console.log("go to new room: "+newID)
              });

        }
        else{
            existingID = results[0]['uuid']
            //insert the new id into the db then send user to that room
            var sql = "DELETE FROM roomID WHERE uuid = " + "'" + existingID + "'"
            console.log(sql)
            pool.query(sql, existingID, async (err, results) => {
                if (err) {
                  throw err;
                }
                res.redirect(`/${existingID}`);
        
              });
        }
      });
   console.log(id)

  });

app.get("/:room", (req, res) => {
  res.render("room2", { roomId: req.params.room });
});

// app.get("/220aadbc-c825-4857-8f93-ff194583e77e", (req, res) => {
//     res.render("room", { roomId: "220aadbc-c825-4857-8f93-ff194583e77e" });
// })
io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message);
    });
  });
});

app.post('/redirect', function(req, res) {
  var url = "https://empowrd-2idk5.ondigitalocean.app/coffeechat";
  // console.log(url);
  res.redirect(301, url);
});



server.listen(process.env.PORT || 3030);
