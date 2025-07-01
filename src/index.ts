import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// Use CORS to allow frontend requests
app.use(cors());

// Example API route
app.get("/api/hello", (req: Request, res: Response) => {
  res.send("Hello from your Render backend!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
