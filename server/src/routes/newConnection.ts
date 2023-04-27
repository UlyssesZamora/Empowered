import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const newConnection: Router = Router();

newConnection.post("/newConnection", async (req, res) => {
    const followerId = req.body.followerId
    const personWhoGotFollowed = req.body.personWhoGotFollowedId


  sql = "INSERT INTO userfollowers (followerId, followedId, status) VALUES (?, ?, 'pending')";
  pool.query(sql, [followerId, personWhoGotFollowed], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
