import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getCons: Router = Router();

getCons.get("/getCons/:id", async (req, res) => {
  const id = req.params.id;

  sql =
    "SELECT c.id, c.con\
  FROM companycon cc\
  INNER JOIN conlist c ON cc.companyConId = c.id\
  WHERE cc.companyId = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});