//importing express web framework
import express, { Express, Request, Response } from "express";
//dotenv creates and loads environment variables
import dotenv from "dotenv";
import mysql, { Connection, createPool, Pool } from "mysql";
import { DATA_SOURCE } from "../config/vars.config";
import { routes } from "./routes/index";
import socketio from 'socket.io'
export const saltRounds = 10;
const dataSource = DATA_SOURCE.mySqlDataSource;
export let pool: Pool = mysql.createPool({});
let sqlInsert: string = "";
let sql: string = "";
import http from 'http';
let conn;

dotenv.config();

// Initialize Express server and store it in "app"
const app: Express = express();
// Establising app port through env vars OR harcoded to 8080
const port = process.env.PORT || 8080;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Try to generate connection pool and establish connection to DB otherwise throw error.
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

conn = pool.getConnection(function (err: any, conn: any) {
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

app.use("/", routes);

const server = http.createServer(app);
const io = new socketio.Server(server);

io.on('connection', (socket) => {
    console.log("Made socket connection");

    socket.on('disconnect', () => {
        console.log("Made socket disconnect")
    })

    socket.on('send-notification', (data) => {
        io.emit('new-notification', data)
    })
})

app.get("/", async (req, res) => {
    res.send("Express + Typescript Server is running...");
  });


//Server port listener
server.listen(port, () => {
  console.log(`[Server]: Server is running at http://localhost:${port}`);
});
