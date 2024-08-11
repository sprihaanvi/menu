//routes ka kaam:apps ki multiple requests hoti hai,jaise login-home-toorders page, all this is defined through endpoints, which is used by app.use se call krwate hai.

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');

const { body, validationResult } = require("express-validator");
//post request
router.post(
  "/createuser",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 letters"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 letters"),
    body("phoneNumber")
      .isLength({ min: 10,max:10 })
      .withMessage("Phone number must be of 10 digits"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10);
    let hashPassword=await bcrypt.hash(req.body.password,salt)
    try {
      
      await User.create({
        name: req.body.name,
        password: hashPassword,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
      });
      //jab endpoint hit hoga and response lekr aayega
      res.json({ success: true });
    } catch {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
