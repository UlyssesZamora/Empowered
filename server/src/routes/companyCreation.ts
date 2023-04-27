import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
const saltRounds: number = 10;
let sqlInsert = "";

export const companyCreation: Router = Router();

companyCreation.post("/api/companyCreation", async (req, res) => {
  const companyName: string = req.body.companyName;
  const companyEmail: string = req.body.companyEmail;
  const companyPassword: string = await bcrypt.hash(
    req.body.companyPassword,
    saltRounds
  );
  const companyLocation: string = req.body.companyLocation;
  const companyMission: string = req.body.companyMission;
  const companyWorkModel: string = req.body.companyWorkModel;
  try {
    const values: (String | number | void)[] = [
      companyName,
      companyEmail,
      companyPassword,
      companyLocation,
      companyMission,
      companyWorkModel,
      1,
    ];

    const emailToTest = companyEmail;
    pool.query("SELECT companyEmail FROM company", (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
        return;
      }
      const hasEmail = results.some(
        (row: any) => row.userEmail === emailToTest
      );
      if (hasEmail) {
        console.log("EMAIL FOUND");
        res.status(400).json({ message: "Email already exists" });
      } else {
        console.log("EMAIL NOT FOUND");
        const sqlInsert =
          "INSERT INTO userinfo (companyName, companyEmail ,companyPassword, companyLocation, companyMission, companyWorkModel) VALUES (?,?,?,?,?,?)";
        pool.query(sqlInsert, values, (error, results, fields) => {
          if (error) {
            console.error(error);
            res.status(500).send(error);
          } else {
            res.status(201).json("User created successfully");
          }
        });
      }
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});
