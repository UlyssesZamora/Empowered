import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getSkills: Router = Router();

getSkills.get("/getSkills/:id", async (req, res) => {
  const id = req.params.id;

  sql = "SELECT s.skill\
  FROM userskill us\
  INNER JOIN skills s ON us.skillId = s.id\
  WHERE us.userInfoId = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
