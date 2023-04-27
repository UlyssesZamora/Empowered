import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getAllDepartment: Router = Router();

getAllDepartment.get("/getAllDepartment", async (req, res) => {
  sql = "SELECT * FROM department";
  pool.query(sql, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
