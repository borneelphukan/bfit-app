import express from "express";
import pool from "../config/database";

const router = express.Router();

// GET / - Fetch all workouts or filtered workouts
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

// POST / - Add a new workout
const addWorkout = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const {
      user_id,
      workout_name,
      workout_type,
      duration,
      difficulty_level,
      calories,
      description,
      estimated_calories,
    } = req.body;

    if (
      !user_id ||
      !workout_name ||
      !workout_type ||
      !duration ||
      !difficulty_level
    ) {
      res.status(400).json({ message: "Please provide all required fields." });
      return;
    }

    const query = `
      INSERT INTO Workout (user_id, workout_name, workout_type, duration, difficulty_level, calories, description, estimated_calories)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      user_id,
      workout_name,
      workout_type,
      duration,
      difficulty_level,
      calories,
      description,
      estimated_calories,
    ];

    const [result] = await pool.execute(query, params);
    res
      .status(201)
      .json({
        message: "Workout added successfully",
        workoutId: (result as any).insertId,
      });
  } catch (error: any) {
    console.error("Error adding new workout:", error.message);
    res.status(500).json({
      message: "An error occurred while adding the workout.",
    });
  }
};

// PUT /:id - Update an existing workout
const updateWorkout = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const workoutId = req.params.id;
    const {
      workout_name,
      workout_type,
      duration,
      difficulty_level,
      calories,
      description,
      estimated_calories,
    } = req.body;

    if (
      !workout_name &&
      !workout_type &&
      !duration &&
      !difficulty_level &&
      !calories &&
      !description &&
      !estimated_calories
    ) {
      res
        .status(400)
        .json({ message: "Please provide at least one field to update." });
      return;
    }

    const fields: string[] = [];
    const params: any[] = [];

    if (workout_name) {
      fields.push("workout_name = ?");
      params.push(workout_name);
    }
    if (workout_type) {
      fields.push("workout_type = ?");
      params.push(workout_type);
    }
    if (duration) {
      fields.push("duration = ?");
      params.push(duration);
    }
    if (difficulty_level) {
      fields.push("difficulty_level = ?");
      params.push(difficulty_level);
    }
    if (calories) {
      fields.push("calories = ?");
      params.push(calories);
    }
    if (description) {
      fields.push("description = ?");
      params.push(description);
    }
    if (estimated_calories) {
      fields.push("estimated_calories = ?");
      params.push(estimated_calories);
    }

    const query = `UPDATE Workout SET ${fields.join(
      ", "
    )} WHERE workout_id = ?`;
    params.push(workoutId);

    const [result] = await pool.execute(query, params);

    if ((result as any).affectedRows === 0) {
      res
        .status(404)
        .json({ message: "Workout not found or no changes made." });
      return;
    }

    res.status(200).json({ message: "Workout updated successfully." });
  } catch (error: any) {
    console.error("Error updating workout:", error.message);
    res.status(500).json({
      message: "An error occurred while updating the workout.",
    });
  }
};

// DELETE /:id - Delete a workout
const deleteWorkout = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const workoutId = req.params.id;

    const query = `DELETE FROM Workout WHERE workout_id = ?`;
    const [result] = await pool.execute(query, [workoutId]);

    if ((result as any).affectedRows === 0) {
      res.status(404).json({ message: "Workout not found." });
      return;
    }

    res.status(200).json({ message: "Workout deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting workout:", error.message);
    res.status(500).json({
      message: "An error occurred while deleting the workout.",
    });
  }
};

// Register routes for GET, POST, PUT, and DELETE
router.get("/", getWorkoutDetails);
router.post("/", addWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;
