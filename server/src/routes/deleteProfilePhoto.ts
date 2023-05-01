import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const deleteProfilePhoto: Router = Router();

deleteProfilePhoto.put("/deletePhoto", async (req, res) => {
  const id = req.body.userId;
  sql = "UPDATE userinfo SET userProfilePicture = NULL WHERE id = ?";
  pool.query(sql, [id], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});