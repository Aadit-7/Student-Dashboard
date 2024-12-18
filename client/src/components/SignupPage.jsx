import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/signup",
        user
      );

      if (response.data) {
        toast.success("Account created successfully!");
        navigate("/studentDetails");
      }
    } catch (error) {
      toast.error("Failed to create account. Please try again!");
      console.error(`Error while signing up: ${error}`);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-semibold text-center text-black">
          Sign Up
        </h1>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md "
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/" className="font-medium text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
