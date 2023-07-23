import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { AiOutlineMenu } from "react-icons/ai";
import toast from "react-hot-toast";


const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navInfo = (
    <>
      <li className="text-lg font-medium hover:text-teal-500">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg font-medium hover:text-teal-500">
        <Link to="/">Colleges</Link>
      </li>
      <li className="text-lg font-medium hover:text-teal-500">
        <Link to="/">My College</Link>
      </li>
      <li className="text-lg font-medium hover:text-teal-500">
        <Link to="/">Admission</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser()
          .then(() => { 
            toast.success('Logout Successfull')
          })
          .catch((err) => {
            toast.error(err.message)
           })
  }

  return (
    <div className="navbar bg-base-100 max-w-[2520px] mx-auto xl:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navInfo}
          </ul>
        </div>
        <a className="normal-case text-lg lg:text-3xl font-bold ">
          <span className="text-teal-500">EDU</span>
          <span className="font-normal">Booking</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5">{navInfo}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className=" md:py-1 md:px-2 flex flex-row items-center gap-4 rounded-full transition">
              <div className="dropdown dropdown-left">
                <label tabIndex={0} className=" m-1 cursor-pointer">
                <AiOutlineMenu />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box"
                >
                  <li>
                    <a onClick={handleLogOut}>Log Out</a>
                  </li>
                  <li>
                    <a>Dashboard</a>
                  </li>
                </ul>
              </div>
              <div className=" md:block rounded-full">
                {user.photoURL && (
                  <img
                  title={user?.displayName}
                    className="rounded-full w-16"
                    src={user.photoURL}
                    alt=""
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <span className="mr-2 text-lg font-medium hover:text-teal-500">
              <Link to="/login">Login </Link>
            </span>{" "}
            /{" "}
            <span className="ml-2 text-lg font-medium hover:text-teal-500">
              <Link to="/signup"> Register</Link>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
