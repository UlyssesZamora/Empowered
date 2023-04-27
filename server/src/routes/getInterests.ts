import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getInterests: Router = Router();

getInterests.get("/getInterests/:id", async (req, res) => {
  const id = req.params.id;

  sql = "SELECT i.id, i.interest\
  FROM userinterest ui\
  INNER JOIN interests i ON ui.interestId = i.id\
  WHERE ui.userInfoId = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
