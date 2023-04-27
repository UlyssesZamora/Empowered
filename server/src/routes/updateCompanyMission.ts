import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const updateCompanyMission: Router = Router();

updateCompanyMission.put("/updateCompanyMission", async (req, res) => {
  const id = req.body.companyId;
  const companyMission = req.body.companyMission;
  sql = "UPDATE company SET companyMission= ? WHERE id = ?";

  // Begin a transaction
  pool.query(sql, [companyMission, id], async (error, results) => {
    if (error) {
      // Handle error
      console.log(error);
    }
    res.status(201).json(results);
  });
});
