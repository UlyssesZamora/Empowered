import express, { Router } from "express";

export const test: Router = Router();

test.post("/test", async (req, res) => {
  res.send("test");
});
