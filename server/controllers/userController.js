import User from "../models/userModel.js"; // Import your User model

export const create = async (req, res) => {
  try {
    const { fullName, studentClass, rollno, age } = req.body;

    if (!fullName || !studentClass || !rollno || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = await User.create({ fullName, studentClass, rollno, age });

    res.status(201).json({
      message: "User created successfully!",
      user: newUser,
    });

    console.log("Request body:", req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in create controller" });
  }
};

export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(400).json({ message: "User Data not found" });
    }
    res.status(201).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error getAll controller" });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(400).json({ message: "User does not Exists" });
    }
    res.status(201).json(userExists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in getOne controller" });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(400).json({ message: "User does not Exists" });
    }

    const updatData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updatData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in update controller" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(400).json({ message: "User does not Exists" });
    }

    await User.findByIdAndDelete(id, req.body, { new: true });
    res.status(201).json({ msg: "User deleted sucessfully !!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error in deleteUser controller" });
  }
};
