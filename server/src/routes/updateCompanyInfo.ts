import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const updateCompanyInfo: Router = Router();

updateCompanyInfo.put("/updateCompanyInfo", async (req, res) => {
  const id = req.body.companyId;
  const companyName = req.body.companyName;
  const companyLocation = req.body.companyLocation;
  sql = "UPDATE company SET companyName = ?, companyLocation = ? WHERE id = ?";

  // Begin a transaction
  pool.query(
    sql,
    [companyName, companyLocation, id],
    async (error, results) => {
      if (error) {
        // Handle error
        console.log(error);
      }
      res.status(201).json(results);
    }
  );
});
