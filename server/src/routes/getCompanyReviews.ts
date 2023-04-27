import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getCompanyReviews: Router = Router();

getCompanyReviews.get("/getCompanyReviews/:id", async (req, res) => {
  const id = req.params.id;

  sql =
    "SELECT r.reviewDescription,r.companyId\
  FROM review r\
  WHERE r.companyId = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
