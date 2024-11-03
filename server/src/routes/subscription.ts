import express from "express";
import pool from "../config/database";

const router = express.Router();

const getSubscriptionDetails = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const userId = req.query.userId as string;

    let query = `SELECT * FROM Subscription`;
    const params: any[] = [];

    if (userId) {
      query += ` WHERE user_id = ?`;
      params.push(userId);
    }

    const [rows] = await pool.execute(query, params);

    if ((rows as any[]).length === 0) {
      res.status(404).json({ message: "No subscription data found." });
      return;
    }

    res.status(200).json(rows);
  } catch (error: any) {
    console.error("Error retrieving subscription details:", error.message);
    res.status(500).json({
      message: "An error occurred while retrieving subscription details.",
    });
  }
};

router.get("/subscriptions", getSubscriptionDetails);

export default router;
