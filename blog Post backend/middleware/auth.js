import express from "express";
import { Redis } from "ioredis";
const redis = new Redis({
  port: 6379,
});
import jwt from "jsonwebtoken";
export const Authverify = async (req, res, next) => {
  // console.log("auth code 4002");
  // console.log(req.headers.authorization?.split(" ")[1]);
  console.log("----------------------------verify____________");

  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log(token);

    if (!token) {
      return res.json({ message: "unauthorized" });
    }
    const decode = jwt.verify(token, "myscert");
    if (!decode) {
      return res.json({ message: "unauthorized" });
    }
    const userId = decode.id;
    console.log("----------------------------");
    console.log("id is the ", userId);
    // data tooken and user validation
    const cachedToken = await redis.get(userId);
    console.log("data is the ", cachedToken);
    console.log("----------------------------");
    if (!cachedToken || cachedToken !== token) {
      return res.json({ message: "unauthorized " });
    }
    req.user = decode;
    next();
  } catch (err) {
    // console.error(err);
    console.log("error auth");
    console.log(err);
    res
      .status(500)
      .json({ message: "Authentication failed. Please try again" });
    return;
  }
};