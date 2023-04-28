import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const addDepartment: Router = Router();

addDepartment.post("/addDepartment", async (req, res) => {
  const newDepartmentList = req.body.newDepartmentList;
  const oldDepartmentList = req.body.oldDepartmentList;

  for (let i = oldDepartmentList.length; i < newDepartmentList.length; i++) {
    sql = "INSERT INTO companydepartment (departmentID,companyId )VALUES (?,?)";

    pool.query(
      sql,
      [newDepartmentList[i].departmentId, newDepartmentList[i].companyId],
      async (err, results) => {
        if (err) {
          throw err;
        }
        res.status(201).json(results);
      }
    );
  }
});
