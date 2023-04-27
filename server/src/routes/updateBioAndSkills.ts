import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const updateBioAndSkills: Router = Router();

updateBioAndSkills.put("/updateBioAndSkills", async (req, res) => {
  const id = req.body.userId;
  const bio = req.body.userBio;
  sql = "UPDATE userexternal SET userAbout = ? WHERE userId = ?";
  pool.query(sql, [bio, id], async (err, results) => {
    if (err) {
      throw err;
    }
    console.log(bio)
    res.status(201).json(results);
  });
});