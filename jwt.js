require("dotenv").config();
const jwt = require("jsonwebtoken");
const createToken = (payload) => jwt.sign(payload, process.env.JWT_KEY);
const verifyToken = (token) => jwt.verify(token, process.env.JWT_KEY);
const token = createToken({ name: "achyut", role: "devloper" });
const isVerified = verifyToken(token);
console.log({ isVerified });
