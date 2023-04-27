import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const editIntro: Router = Router();

editIntro.put("/editIntro", async (req, res) => {
    const id = req.body.userId;
    const firstName = req.body.userFirstName;
    const lastName = req.body.userLastName;
    const company = req.body.userCompanyName;
    const location = req.body.userLocation;
  
    // Begin a transaction
    pool.query(
        'UPDATE userinfo SET userFirstName = ?, userLastName = ?, userCompanyName = ? WHERE id = ?',
        [firstName, lastName, company, id],
        (error) => {
          if (error) {
            // Handle error
            console.log(error)
          } else {
            // Update userinfo table successfully
            pool.query(
              'UPDATE userexternal SET userLocation = ? WHERE userId = ?',
              [location, id],
              (error) => {
                if (error) {
                  // Handle error
                  console.log(error)
                } else {
                  // Update userexternal table successfully
                  res.status(201).json({ message: 'Data updated successfully!' });
                }
              }
            );
          }
        }
      );
      
  });
  