import express, { Router } from "express";

export const landingPage: Router = Router();

landingPage.get("/home", async (req, res) => {
  res.send("Express + Typescript Server is running...");
});
