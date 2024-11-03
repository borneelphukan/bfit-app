import express from "express";
import pool from "../config/database";

const router = express.Router();

const registerUser = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { firstName, lastName, email, password, dateOfBirth } = req.body;

    if (!firstName || !lastName || !email || !password || !dateOfBirth) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    const subscriptionQuery = `
      INSERT INTO Subscription (subscription_type, start_date, end_date, subscription_status) 
      VALUES ('free', CURDATE(), CURDATE() + INTERVAL 30 DAY, 'inactive')
    `;
    const [subscriptionResult] = await pool.execute(subscriptionQuery);
    const subscriptionId = (subscriptionResult as any).insertId;

    const userQuery = `
      INSERT INTO Users (first_name, last_name, email, password, date_of_birth, subscription_id) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await pool.execute(userQuery, [
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      subscriptionId,
    ]);

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error: any) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "An error occurred during registration." });
  }
};

router.post("/register/user", registerUser);

export default router;
