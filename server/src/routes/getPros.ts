import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getPros: Router = Router();

getPros.get("/getPros/:id", async (req, res) => {
  const id = req.params.id;

  sql =
    "SELECT p.id, p.pro\
  FROM companypro cp\
  INNER JOIN prolist p ON cp.companyProId = p.id\
  WHERE cp.companyId = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
