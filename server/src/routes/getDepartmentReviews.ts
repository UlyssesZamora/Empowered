import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getDepartmentReviews: Router = Router();

getDepartmentReviews.get("/getDepartmentReviews/:id", async (req, res) => {
  const id = req.params.id;

  sql =
    "SELECT dr.reviewDescription,dr.reviewOfCompany,dr.companydepartmentId,\
        (SELECT  departmentName As departmentName\
        FROM    department \
        WHERE  department.id = cd.departmentID\
        ) As departmentName\
    FROM departmentreview dr\
    inner join companydepartment cd on dr.companydepartmentId = cd.id\
    WHERE dr.reviewOfCompany = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
