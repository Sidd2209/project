import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello from backend!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
