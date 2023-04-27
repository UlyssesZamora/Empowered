import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const updateCompanyLogo: Router = Router();

updateCompanyLogo.put("/api/updateLogo", async (req, res) => {
  const id = req.body.companyId;
  const img = req.body.companyImage;
  sql = "UPDATE company SET companyLogo = ? WHERE id = ?";
  pool.query(sql, [img, id], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
