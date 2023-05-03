import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const addDepartment: Router = Router();

addDepartment.post("/addDepartment", async (req, res) => {
  const departmentIds = req.body.departmentId;
  const companyId = req.body.companyId;
  const values = departmentIds.map((value: any) => [value, companyId]); // adding to list of companyId and departmentID

  sql = "INSERT INTO companydepartment (departmentID,companyId) VALUES ?";

  pool.query(sql, [values], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
