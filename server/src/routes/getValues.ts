import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getValues: Router = Router();

getValues.get("/getValues/:id", async (req, res) => {
  const id = req.params.id;

  sql = "SELECT v.id, v.valueList\
  FROM uservalue uv\
  INNER JOIN valueslist v ON uv.userValueId = v.id\
  WHERE uv.userInfoId = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
