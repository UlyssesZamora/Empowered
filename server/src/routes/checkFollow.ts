import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const checkFollow: Router = Router();

checkFollow.get("/checkFollow", async (req, res) => {
  const followerId = req.query.followerId;
  const personWhoGotFollowed = req.query.personWhoGotFollowedId;

  console.log(followerId, personWhoGotFollowed);

  sql = `SELECT * FROM userfollowers WHERE (followerId = ? AND followedId = ? AND status = 'accepted') 
  OR (followerId = ? AND followedId = ? AND status = 'accepted')
`;
  pool.query(
    sql,
    [followerId, personWhoGotFollowed, personWhoGotFollowed, followerId],
    async (err, results) => {
      if (err) {
        throw err;
      }
      const isFollowing = results.length > 0;
      res.json({ isFollowing });
    }
  );
});
