import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const AddUserInterest: Router = Router();

AddUserInterest.post("/addUserInterest", async (req, res) => {
  const userId = req.body.userId;
  const userInterests = JSON.parse(req.body.userInterests);
  const values = Object.values(userInterests).map((interest:any) => [interest.id, userId]); // Update to include userId in the values

  // Delete existing user interests from userskill table
  let sql = 'DELETE FROM userinterest WHERE userInfoId = ?';
  pool.query(sql, [userId], (err, deleteResults) => {
    if (err) {
      console.error('Error deleting user interests from userskill table:', err);
      res.status(500).json({ error: 'Failed to delete user interests from userskill table' });
    } else {
      // Insert new user interests into userinterest table
  console.log(values)
      sql = 'INSERT INTO userinterest (interestId, userInfoId) VALUES ?';
      pool.query(sql, [values], (err, insertResults) => {
        if (err) {
          console.error('Error inserting user interests into userinterest table:', err);
          res.status(500).json({ error: 'Failed to insert user interests into userinterest table' });
        } else {
          console.log('Successfully updated user interests');
          res.status(200).json({ success: 'Successfully updated user interests' });
        }
      });
    }
  });
});

