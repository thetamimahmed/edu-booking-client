import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner10 } from "react-icons/im";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const {
    user,
    loading,
    setLoading,
    googleSignIn,
    createUser,
  } = useContext(AuthContext);
  console.log(user)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        console.log(imageUrl)

        createUser(email, password)
        .then(result =>{
          console.log(result)
            updateProfile(result.user, {displayName: name, photoURL: imageUrl})
            .then(()=>{
                toast.success('Register Successfully')
                navigate(from, {replace:true})
            })
            .catch(err=>{
                toast.error(err.message)
            })
        .catch(err=>{
            toast.error(err.message)
            console.log(err.message)
        })
        })
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="lg:w-[40%] py-10 px-10 bg-[#F6F7F9]">
        <h1 className="text-center text-teal-500 text-2xl font-bold uppercase">
          Register
        </h1>
        <h3 className="text-center text-[#666666]">Welcome To EDUBooking</h3>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-3">
            <label className="text-sm block" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="text-sm block" htmlFor="image">
              Your Image
            </label>

            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="mt-2 cursor-pointer w-full"
              required
            />
          </div>
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
              {loading ? (
                <ImSpinner10 className="animate-spin" size={32} />
              ) : (
                "Sign Up"
              )}
            </button>
            <p className="text-center my-4">Sign up with social account</p>
            <div
              onClick={handleGoogleLogIn}
              className="flex justify-center items-center space-x-2 border p-2 border-gray-300 border-rounded cursor-pointer"
            >
              <FcGoogle size={32} />
              <p>Continue with Google</p>
            </div>
            <p className="text-center mt-3">
              Do you have an account?{" "}
              <Link className="text-teal-600 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
