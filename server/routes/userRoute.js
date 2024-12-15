import express from "express";
import {
  create,
  deleteUser,
  getAll,
  getOne,
  update,
} from "../controllers/userController.js"; // Import your controller function

const router = express.Router();

// Define the POST route for creating users
router.post("/create", create);
router.get("/getAll", getAll);
router.get("/getOne/:id", getOne);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUser);
// console.log("userRoute.js loaded");

export default router;
