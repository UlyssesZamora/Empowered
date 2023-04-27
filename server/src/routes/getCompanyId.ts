import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getCompanyId: Router = Router();

getCompanyId.get("/companyId/:id", async (req, res) => {
  const id = req.params.id;

  sql = "SELECT * FROM company WHERE id = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
