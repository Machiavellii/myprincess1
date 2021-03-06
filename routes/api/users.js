const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// User Model
const User = require("../../models/User");

// @route    GET api/users
// @desc     Test route
// @access   Public
router.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) {
      return status(400).json({
        error: err
      });
    }
    res.json({ users });
  }).select("nickname email, block");
});

// @route    POST api/users
// @desc     Regisration USER
// @access   Public
router.post(
  "/",
  [
    check("nickname", "Nickname is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nickname, email, password, block } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exist " }] });
      }

      user = new User({
        nickname,
        email,
        password,
        block
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

// @route    POST api/users/:id
// @desc     Block Account
// @access   Private
router.post("/:id", async (req, res) => {
  try {
    const { block } = req.body;

    await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { block } },
      { new: true, upsert: true }
    );

    return res.status(200).json({ block });
  } catch (err) {
    console.log("create dish err:", err);
    return res.status(500).json();
  }
});

module.exports = router;
