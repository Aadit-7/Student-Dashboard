import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    studentClass: "",
    rollno: "",
    age: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/getOne/${id}`
        );
        setFormData(response.data);
      } catch (err) {
        toast.error("Failed to fetch student data");
      }
    };
    fetchStudent();
  }, [id]);

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
      await axios.put(`http://localhost:5001/api/update/${id}`, formData);
      toast.success("Student updated successfully");
      navigate("/studentDetails");
    } catch (err) {
      toast.error("Failed to update student data");
      setError("Failed to update student data.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-gray--100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-semibold text-center text-black">
          Edit Student
        </h1>
        {error && (
          <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="studentClass"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Class
            </label>
            <input
              id="studentClass"
              name="studentClass"
              type="text"
              value={formData.studentClass}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rollno"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Roll No
            </label>
            <input
              id="rollno"
              name="rollno"
              type="text"
              value={formData.rollno}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserPage;
