import { Router } from "express";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const getCompanyProfileData: Router = Router();

interface JwtPayload {
  id: string;
}

getCompanyProfileData.get(
  "/companyProfileData",
  validationCheck,
  async (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      const decoded = decode(token) as JwtPayload;
      // console.log(decoded?.id);
      try {
        const values: string = decoded.id;
        sql =
          "SELECT id, companyName, companyRegisteredDate, companyLastLogin,  companyLocation, companyMission, companyWorkModel, companyLogo  FROM company WHERE companyEmail = ?";
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
  }
);
