import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const Homepage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/getAll");
        setStudents(response.data || []);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [students]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/delete/${id}`);
      toast.success("Deleted Successfully");
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="pt-10 pb-20 pl-20 pr-20 bg-slate-500 rounded-2xl ">
      <Header />
      <div className="overflow-x-auto">
        <table className="table border table-zebra">
          <thead className="p-5 text-lg text-center bg-base-200">
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Class</th>
              <th>Age</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody className="p-10 text-center text-white">
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student._id}>
                  <td>{student.fullName}</td>
                  <td>{student.rollno}</td>
                  <td>{student.studentClass}</td>
                  <td>{student.age}</td>
                  <td className="text-green-500">
                    <Link to={`/edit/${student._id}`}>
                      <FaUserEdit className="-mr-10 size-6" />
                    </Link>
                  </td>
                  <td className="text-red-800">
                    <button onClick={() => handleDelete(student._id)}>
                      <MdDeleteForever className=" size-6" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homepage;
