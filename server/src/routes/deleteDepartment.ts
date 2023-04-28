import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const deleteDepartment: Router = Router();

deleteDepartment.delete("/deleteDepartment/:id", async (req, res) => {
  const id = req.params.id;
  sql = "DELETE from companydepartment where id=?";
  pool.query(sql, [id], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });

});
