import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getAllSkills: Router = Router();

getAllSkills.get("/getAllSkills", async (req, res) => {

  sql = "SELECT * FROM skills";
  pool.query(sql, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
