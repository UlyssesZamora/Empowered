import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getAllValues: Router = Router();

getAllValues.get("/getAllValues", async (req, res) => {

  sql = "SELECT * FROM valueslist";
  pool.query(sql, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
