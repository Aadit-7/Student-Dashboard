import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5001/api/login",
        user
      );

      if (response.data) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        navigate("/studentDetails");
      }
    } catch (error) {
      toast.error("Login failed! Please check your credentials.");
      console.error(`Error while Login: ${error}`);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 rounded-2xl">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-semibold text-center text-black">
          Log In
        </h1>

        <form onSubmit={onSubmitHandler}>
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
              className="w-full px-4 py-2 text-black bg-white border border-gray-300 rounded-md"
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
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-blue-500 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
