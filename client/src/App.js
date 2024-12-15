import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/HomePage";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";
import Add from "./components/AddStudentPage";
import EditUserPage from "./components/EditStudentPage";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/studentDetails",
      element: <Homepage/>,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <EditUserPage />,
    },
  ]);
  return (
    <div className="flex items-center justify-center p-4">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
