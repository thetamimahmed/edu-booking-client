import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="lg:w-[40%] py-10 px-10 bg-[#F6F7F9]">
        <h1 className="text-center text-teal-500 text-2xl font-bold uppercase">
          LogIn
        </h1>
        <h3 className="text-center text-[#666666]">Welcome To EDUBooking</h3>
        <form className="mt-5">
          <div className="mb-3">
            <label className="text-sm block" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="text-sm block" htmlFor="">
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mt-3">
            <button className="btn btn-block bg-teal-500 text-white hover:bg-[#072F60]">
              Login
            </button>
            <p className="text-center my-4">Login with social account</p>
            <div className="flex justify-center items-center space-x-2 border p-2 border-gray-300 border-rounded cursor-pointer">
              <FcGoogle size={32} />
              <p>Continue with Google</p>
            </div>
            <p className="text-center mt-3">
              New in EDUBooking?{" "}
              <Link className="text-teal-600 underline" to="/signup">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
