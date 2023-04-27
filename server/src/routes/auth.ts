import { Router } from "express";
import url from "url";
import dotenv from "dotenv";
import axios from "axios";
import { pool } from "../index";
import { sign } from "jsonwebtoken";

export const auth: Router = Router();
dotenv.config();
let at: string;
let sql: string;

auth.post("/auth", async (req, res) => {
  at = req.body.at;
  const headers = { Authorization: "Bearer " + at };
  axios
    .get("https://www.googleapis.com/oauth2/v3/userinfo", { headers })
    .then((results: any) => {
      if (results.status === 200) {
        try {
          const email: string = results.data.email;
          sql = "select * from userinfo where userEmail = ?";
          pool.query(sql, email, async (err, qresults, fields) => {
            if (err) {
              return;
              //res.status(401).json("Bad Query");
            } else if (qresults.length === 0) {
              res.sendStatus(205)
              //res.status(401).json("User doesn't exist");
            } else {
              const accessToken: any = sign({ key: qresults[0].id, id: email, isUser: true }, process.env.JWT_HASH!, 
                {
                expiresIn: "7d",
                }
              ); // mySecretKey should be in env really long name  //7d
              res.status(200).json(accessToken);
                }
              })
          }catch (e) {
            return e;
          }
      }
    })
    .catch((error) => {
      console.log(error);
    });
});