import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
  },
  studentClass: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("User", userModel);
