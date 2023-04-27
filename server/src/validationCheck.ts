import { verify } from "jsonwebtoken";

export const validationCheck = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    verify(token, "mySecretKey", (err: any, user: any) => {
      if (err) {
        res.status(401).json("Token is expired"); // fake token or it has expired
      } else {
        next();
      }
    });
  } else {
    res.send("You are not authenticated"); // no token in header
  }
};