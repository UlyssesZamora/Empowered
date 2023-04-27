import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getAllPros: Router = Router();

getAllPros.get("/getAllPros", async (req, res) => {
  sql = "SELECT * FROM prolist";
  pool.query(sql, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
