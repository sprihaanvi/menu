const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "apxqtiqibsuguwqkqcjpeunvaywadyhz";
router.post(
  "/loginuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must atleast of length 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Invalid Email ID or Password" });
      }
      if (!bcrypt.compare(req.body.password, userData.password)) {
        return res.status(400).json({ errors: "Invalid Email ID or Password" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };

      //jwt token: payload is data and sign is jwtSecret
      const authToken = jwt.sign(data, jwtSecret);

      res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
