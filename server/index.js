import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/userRoute.js";
import routerT from "./routes/teacherRoute.js";

dotenv.config({});

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

// Test route
app.get("/test", (req, res) => {
  res.send({ message: "Test route Working" });
});

connectDB();

// Register the API routes
app.use("/api", router);
app.use("/api", routerT);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
