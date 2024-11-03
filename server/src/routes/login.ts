import express from "express";
import pool from "../config/database";

const router = express.Router();

const loginUser = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required." });
      return;
    }

    const [rows]: any = await pool.execute(
      "SELECT * FROM Users WHERE email = ?",
      [email]
    );
    const user = rows[0];

    if (!user) {
      res.status(400).json({ message: "User not found." });
      return;
    }

    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid email or password." });
      return;
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error: any) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "An error occurred during login." });
  }
};

router.post("/login", loginUser);

export default router;
