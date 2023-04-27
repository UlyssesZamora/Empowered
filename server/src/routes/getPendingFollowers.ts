import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getPendingFollowers: Router = Router();

getPendingFollowers.get("/getPendingFollowers/:id", async (req, res) => {
    const id = req.params.id

  sql = "SELECT userinfo.userFirstName, userinfo.userLastName, userinfo.userProfilePicture, userinfo.userCompanyName, userfollowers.followerId\
  FROM userfollowers\
  JOIN userinfo ON userfollowers.followerId = userinfo.id\
  WHERE userfollowers.status = 'pending' AND userfollowers.followedId = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
