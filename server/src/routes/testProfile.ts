import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const testProfile: Router = Router();

testProfile.get("/profileId/:id", async (req, res) => {
  const id = req.params.id;

  sql = "SELECT ui.id, ui.userFirstName, ui.userLastName, ui.userProfilePicture, ue.userAbout, \
    ue.userLocation, ui.userCompanyName\
    FROM userinfo ui, userexternal ue\
    WHERE ui.id = ? and ue.userId = ?";
  pool.query(sql, [id,id], async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});
