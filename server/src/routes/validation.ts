import express, { Router } from "express";
import { verify, sign } from "jsonwebtoken";
import { validationCheck } from "../validationCheck";

export const validation: Router = Router();

// for future route protection
validation.get("/api/validation", validationCheck, async (req, res) => {
  res.status(200).json(true);
});
