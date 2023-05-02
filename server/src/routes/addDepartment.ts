import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const addDepartment: Router = Router();

addDepartment.post("/addDepartment", async (req, res) => {
  const departmentId = req.body.departmentId;
  const companyId = req.body.companyId;
  sql = "INSERT INTO companydepartment (departmentID,companyId )VALUES (?,?)";

  pool.query(sql, [departmentId, companyId], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
