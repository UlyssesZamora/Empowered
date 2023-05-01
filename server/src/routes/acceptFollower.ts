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
    } else {
        sql = "INSERT INTO userfollowers (followerId, followedId, status) VALUES (?, ?, 'accepted')";
        pool.query(sql, [followedId, followerId], async (err, results) => {
            if(err) {
                console.error('Error user follower into table:', err);
                res.status(500).json({ error: 'Error user follower into table' });
            } else {
                console.log('Successfully updated user followers');
                res.status(200).json({ success: 'Successfully updated user followers' });
            }
        })
    }
  });
});
