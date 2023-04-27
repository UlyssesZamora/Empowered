import { Router } from "express";
import { pool } from "../index";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { sign } from "jsonwebtoken";
export const logIn: Router = Router();
dotenv.config();
let sql: string;

logIn.post("/api/login", async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  try {
    const values: string[] = [user];
    sql = `select * from userinfo where userEmail = ?`;
    pool.query(sql, values, async (err, results, fields) => {
      if (err) {
        res.status(401).json("Bad Query");
      } else if (results.length === 0) {
        res.status(401).json("User doesn't exist");
      } else {
        const userId = results[0].id
        let temp: boolean = await bcrypt.compare(
          password,
          results[0].userPassword
        );
        if (temp) {
          const accessToken = sign(
            { key: results[0].id, id: user, isUser: true },
            process.env.JWT_HASH!,
            {
              expiresIn: "7d",
            }
          ); // mySecretKey should be in env really long name  // 7d
          res.status(200).json(accessToken);
        } else {
          res.status(401).json("Password is wrong");
        }
      }
    });
  } catch (e) {
    res.send(e);
  }
});
