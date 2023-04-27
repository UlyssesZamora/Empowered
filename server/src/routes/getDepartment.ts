import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const getDepartment: Router = Router();

getDepartment.get("/getDepartment/:id", async (req, res) => {
  const id = req.params.id;

  sql =
    "SELECT *\
    FROM companydepartment cd\
    INNER JOIN department d on cd.departmentID=d.id\
    WHERE cd.companyId =?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
