import { Link } from "react-router-dom";

const AdmissionCard = ({ college }) => {
  const { _id, college_image, college_name, college_rating } = college;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={college_image} alt="Shoes" className="h-[300px]" />
      </figure>
      <div className="p-5">
        <h2 className="text-center text-2xl font-semibold">{college_name}</h2>
        <p className="text-center text-lg mb-2">Rating: {college_rating}</p>
        <div className="">
          <Link to={`/admission/${_id}`}>
            <button className="btn btn-block bg-teal-500 text-white hover:bg-[#072F60]">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCard;
