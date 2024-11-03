import express from "express";
import pool from "../config/database";

const router = express.Router();

const getSubscriptionDetails = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const userId = req.query.userId as string;

    if (!userId) {
      res
        .status(400)
        .json({ message: "User ID is required as a query parameter." });
      return;
    }

    const query = `SELECT * FROM Subscription WHERE user_id = ?`;
    const [rows] = await pool.execute(query, [userId]);

    if ((rows as any[]).length === 0) {
      res
        .status(404)
        .json({ message: "No subscription found for the provided User ID." });
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
