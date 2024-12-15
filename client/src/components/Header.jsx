import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/logout");

      if (response.status === 200) {
        localStorage.removeItem("token");
        toast.success("Logged out successfully!");
        navigate("/");
      } else {
        toast.error("Logout failed!");
      }
    } catch (error) {
      toast.error("Error during logout.");
    }
  };

  return (
    <div>
      <h1 className="mb-10 mr-10 text-3xl font-bold text-center text-black underline">
        Student Management Dashboard
      </h1>
      <ul className="flex items-center justify-center mb-5 mr-10 gap-x-4">
        <li className="pr-96">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            <Link to="/add">Add New Student</Link>
          </button>
        </li>
        <li>
          <button className="btn btn-accent" onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
