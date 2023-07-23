import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllCollege from "../Pages/AllCollege/AllCollege";
import Colleges from "../Pages/Colleges/Colleges";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/colleges"),
      },
      {
        path: "colleges/:id",
        element: <PrivateRoute><Colleges></Colleges></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: "/colleges",
        element: <AllCollege></AllCollege>,
        loader: () => fetch("http://localhost:5000/colleges"),
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
]);
