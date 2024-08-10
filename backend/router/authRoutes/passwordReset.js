

const router = require("express").Router();
const { User } = require("../../models/authModels/user");
const Token = require("../../models/authModels/token");
const crypto = require("crypto");
const sendMail = require("../../utils/sendEmail");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");

// Send password reset link
router.post("/", async (req, res) => {
  try {
    const emailSchema = Joi.object({
      email: Joi.string().email().required().label("Email"),
    });
    const { error } = emailSchema.validate(req.body);
    if (error) return res.status(400).send({ status: false, message: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ status: false, message: "User not found. Email does not exist." });

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      await token.save();
    }

    const url = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendMail(user.email, "Password Reset", url);
    res.status(200).send({ status: true, message: "Password reset link sent to your email." });
  } catch (error) {
    console.error("Error sending password reset link:", error);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
});

// Verify URL
router.get("/:userId/:token", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) return res.status(400).send({ status: false, message: "User not found." });

    const token = await Token.findOne({ userId: req.params.userId, token: req.params.token });
    if (!token) return res.status(400).send({ status: false, message: "Invalid or expired token." });

    res.status(200).send({ status: true, message: "Valid URL." });
  } catch (error) {
    console.error("Error verifying URL:", error);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
});

// Reset password
router.post("/:userId/:token", async (req, res) => {
  try {
    const passwordSchema = Joi.object({
      password: passwordComplexity().required().label("Password"),
    });
    const { error } = passwordSchema.validate(req.body);
    if (error) return res.status(400).send({ status: false, message: error.details[0].message });

    const user = await User.findOne({ _id: req.params.userId });
    if (!user) return res.status(400).send({ status: false, message: "User not found." });

    const token = await Token.findOne({ userId: req.params.userId, token: req.params.token });
    if (!token) return res.status(400).send({ status: false, message: "Invalid or expired token." });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user.password = hashPassword;
    await user.save();
    await token.deleteOne(); // Use deleteOne() to remove the token

    res.status(200).send({ status: true, message: "Password reset successfully." });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
});

module.exports = router;

