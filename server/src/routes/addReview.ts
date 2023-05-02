import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../index";
import { decode } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";
let sql = "";

export const AddReview: Router = Router();

AddReview.post("/addReview", async (req, res) => {
    const bio = req.body.bio;
    const reviewerId = req.body.reviewerId;
    const personWhoGotReviewd = req.body.personWhoGotReviewd;

    sql = "INSERT INTO vettedreview (vettedReviewDescription, userWhoGotReview, userInfoReviewerId)\
    VALUES (?,?,?)"
    pool.query(sql, [bio, personWhoGotReviewd, reviewerId], async (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).json(results);
    });
});

