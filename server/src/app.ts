import express from "express";
import registerRoutes from "./routes/register";
import loginRoutes from "./routes/login";
import subscriptionRoutes from "./routes/subscription";
import workoutRoutes from "./routes/workout";

const app = express();

app.use(express.json());

app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
