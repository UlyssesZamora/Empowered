import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getProfileData: Router = Router();

interface JwtPayload {
  id: string;
}

getProfileData.get("/profileData", validationCheck, async (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const decoded = decode(token) as JwtPayload;

    try {
      const values: string = decoded.id;
      sql =
        "SELECT id, salary, userCompanyName, userDateOfBirth, userEmail, userFirstName, userLastName, userProfilePicture FROM userinfo WHERE userEmail = ?";
      pool.query(sql, values, async (err, results) => {
        if (err) {
          throw err;
        }
        res.status(201).json(results);
      });
    } catch (e) {
      res.status(500).send(e);
    }
  }
});
