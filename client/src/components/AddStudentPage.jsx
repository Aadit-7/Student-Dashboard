import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    studentClass: "",
    rollno: "",
    age: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/create",
        formData
      );
      if (response.status === 201) {
        toast.success("Student added successfully!");
        setFormData({
          fullName: "",
          studentClass: "",
          rollno: "",
          age: "",
        });
        navigate("/studentDetails");
      }
    } catch (error) {
      toast.error("Failed to add student.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-semibold text-center text-black">
          Add New Student
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Full Name :
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="studentClass"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Class :
            </label>
            <input
              id="studentClass"
              name="studentClass"
              type="text"
              value={formData.studentClass}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rollno"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Roll No :
            </label>
            <input
              id="rollno"
              name="rollno"
              type="text"
              value={formData.rollno}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Age :
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;
