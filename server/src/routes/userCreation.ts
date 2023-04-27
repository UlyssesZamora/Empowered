import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
const saltRounds: number = 10;
let sqlInsert = "";

export const userCreation: Router = Router();

userCreation.post("/api/userCreation", async (req, res) => {
  const userFirstName: string = req.body.userFirstName;
  const userLastName: string = req.body.userLastName;
  const userEmail: string = req.body.userEmail;
  const userPassword: string = await bcrypt.hash(
    req.body.userPassword,
    saltRounds
  );
  const userReferral: string = req.body.userReferral;
  const userCompanyName: string = req.body.userCompanyName;

  try {
    const values: (String | number | void)[] = [
      userFirstName,
      userLastName,
      userEmail,
      userPassword,
      userReferral,
      userCompanyName,
      1,
    ];

    const emailToTest = userEmail;
    pool.query("SELECT userEmail FROM userinfo", (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
        return;
      }
      const hasEmail = results.some(
        (row: any) => row.userEmail === emailToTest
      );
      if (hasEmail) {
        res.status(400).json({ message: "Email already exists" });
      } else {
        const sqlInsert =
          "INSERT INTO userinfo (userFirstName, userLastName ,userEmail, userPassword, userReferral, userCompanyName, userActive) VALUES (?,?,?,?,?,?,?)";
        pool.query(sqlInsert, values, (error, results, fields) => {
          if (error) {
            console.error(error);
            res.status(500).send(error);
          } else {
            const userId = results.insertId;
            const sqlInsertUserExternal =
              "INSERT INTO userexternal (userId, userActive) VALUES (?,?)";
            const userExternalValues = [userId, 1];
            pool.query(
              sqlInsertUserExternal,
              userExternalValues,
              (error, results, fields) => {
                if (error) {
                  console.error(error);
                  res.status(500).send(error);
                } else {
                  res.status(201).json("User created successfully");
                }
              }
            );
          }
        });
      }
    });
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});
