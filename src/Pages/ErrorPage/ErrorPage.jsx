import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://i.ibb.co/L1pSmnb/error.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-95"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-9xl font-bold text-teal-500">404</h1>
          <p className="mb-5 text-teal-500 text-2xl font-bold">
            SORRY NOT FOUND ANY PAGE
          </p>
          <button className="btn btn-block bg-teal-500 text-white hover:bg-[#072F60]">
            <Link to="/">Back To Homepage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
