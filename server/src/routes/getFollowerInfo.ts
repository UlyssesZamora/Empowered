import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getFollowerInfo: Router = Router();

getFollowerInfo.get("/getFollowerInfo", async (req, res) => {
    const followedId = req.query.followedId

  sql = "SELECT userinfo.id, userinfo.userFirstName, userinfo.userLastName, userinfo.userProfilePicture\
  FROM userfollowers \
  JOIN userinfo ON userfollowers.followerId = userinfo.id\
  WHERE userfollowers.followedId = ? AND userfollowers.status = 'accepted'\
  GROUP BY userinfo.id"
  pool.query(sql, followedId, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
