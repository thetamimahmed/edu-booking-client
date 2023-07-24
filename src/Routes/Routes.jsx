import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import AllCollege from "../Pages/AllCollege/AllCollege";
import Colleges from "../Pages/Colleges/Colleges";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyCollege from "../Pages/MyCollege/MyCollege";
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
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
        loader: () => fetch("http://localhost:5000/colleges"),
      },
      {
        path:"/admission/:id",
        element: <AdmissionForm></AdmissionForm>,
        loader: ({params})=> fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: "/my-college",
        element: <MyCollege></MyCollege>, 
        loader: () => fetch("http://localhost:5000/admissions"),
      },
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
