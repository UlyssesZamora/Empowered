import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getAllInterests: Router = Router();

getAllInterests.get("/getAllInterests", async (req, res) => {

  sql = "SELECT * FROM interests";
  pool.query(sql, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
