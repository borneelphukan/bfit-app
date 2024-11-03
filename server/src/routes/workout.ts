import express from "express";
import pool from "../config/database";

const router = express.Router();

const getWorkoutDetails = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {

  try {
    const userId = req.query.userId as string | undefined;
    const workoutType = req.query.workoutType as string | undefined;

    let query = `SELECT * FROM Workout`;
    const params: any[] = [];

    if (userId || workoutType) {
      const conditions: string[] = [];
      if (userId) {
        conditions.push("user_id = ?");
        params.push(userId);
      }
      if (workoutType) {
        conditions.push("workout_type = ?");
        params.push(workoutType);
      }
      query += ` WHERE ${conditions.join(" AND ")}`;
    }

    const [rows] = await pool.execute(query, params);

    if ((rows as any[]).length === 0) {
      res.status(404).json({ message: "No workout data found." });
      return;
    }

    res.status(200).json(rows);
  } catch (error: any) {
    console.error("Error retrieving workout details:", error.message);
    res.status(500).json({
      message: "An error occurred while retrieving workout details.",
    });
  }
};

router.get("/", getWorkoutDetails);

export default router;
