import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/Admission/AdmissionForm";
import AllCollege from "../Pages/AllCollege/AllCollege";
import Colleges from "../Pages/Colleges/Colleges";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyCollege from "../Pages/MyCollege/MyCollege";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://edu-booking-server-blue.vercel.app/colleges"),
      },
      {
        path: "colleges/:id",
        element: <PrivateRoute><Colleges></Colleges></PrivateRoute>,
        loader: ({params})=> fetch(`https://edu-booking-server-blue.vercel.app/colleges/${params.id}`)
      },
      {
        path: "/colleges",
        element: <AllCollege></AllCollege>,
        loader: () => fetch("https://edu-booking-server-blue.vercel.app/colleges"),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
        loader: () => fetch("https://edu-booking-server-blue.vercel.app/colleges"),
      },
      {
        path:"/admission/:id",
        element: <AdmissionForm></AdmissionForm>,
        loader: ({params})=> fetch(`https://edu-booking-server-blue.vercel.app/colleges/${params.id}`)
      },
      {
        path: "/my-college",
        element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>, 
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
