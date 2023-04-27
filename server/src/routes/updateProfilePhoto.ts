import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const updateProfilePhoto: Router = Router();

updateProfilePhoto.put("/updatePhoto", async (req, res) => {
  const id = req.body.userId;
  const img = req.body.userImage;
  sql = "UPDATE userinfo SET userProfilePicture = ? WHERE id = ?";
  pool.query(sql, [img, id], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});