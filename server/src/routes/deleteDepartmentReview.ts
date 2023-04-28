import { Router } from "express";
import { pool } from "../index";

let sql = "";

export const deleteDepartmentReview: Router = Router();

deleteDepartmentReview.delete(
  "/deleteDepartmentReview/:id",
  async (req, res) => {
    const id = req.params.id;

    //deleteing the review  from that department as it is child of companydepartment
    sql = "DELETE from departmentreview where id =?";
    pool.query(sql, [id], async (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).json(results);
    });
  }
);
