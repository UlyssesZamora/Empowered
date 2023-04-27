import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const userReviews: Router = Router();

userReviews.get("/reviews", async (req, res) => {
  const id = req.query.userId;

  sql =
    "SELECT ur.reviewScore, ur.vettedReviewDescription, ui.userFirstName, ui.userLastName, ui.userEmail, ui.userProfilePicture\
    FROM vettedreview ur\
    INNER JOIN userinfo ui \
    ON ur.userInfoReviewerId = ui.id \
    WHERE ur.userWhoGotReview = ?";
  pool.query(sql, id, async (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(results);
  });
});