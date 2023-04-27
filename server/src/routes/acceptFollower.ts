import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const acceptFollowers: Router = Router();

acceptFollowers.put("/acceptFollowers", async (req, res) => {
    const followedId = req.body.followedId
    const followerId = req.body.followerId

  sql = "UPDATE userfollowers SET status = 'accepted' WHERE followedId = ? AND followerId = ?"
  pool.query(sql, [followedId, followerId], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
