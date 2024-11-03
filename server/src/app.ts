import express from "express";
import registerRoutes from "./routes/register";
import loginRoutes from "./routes/login";
import subscriptionRoutes from "./routes/subscription";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", registerRoutes, loginRoutes, subscriptionRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
