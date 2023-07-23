import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    _id,
    college_image,
    college_name,
    admission_dates,
    events,
    research_history,
    sports,
  } = college;
  return (
    <div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={college_image} alt="Shoes" className="h-[300px]" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl font-bold text-[#072F60]">
          {college_name}
        </h2>
        <p className="font-medium text-teal-500 text-center">
          Fall - {admission_dates.fall}{" "}
          <span className="text-xl font-semibold"> & </span> Spring -{" "}
          {admission_dates.spring}
        </p>
        <div className="flex justify-evenly items-center">
          <div className="pr-2">
            <table className="">
              {/* head */}
              <thead>
                <tr>
                  <td className="text-lg text-teal-500 font-semibold">Events</td>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {events.map((event) => (
                  <tr key={event}><td>{event}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="">
            <table className="">
              {/* head */}
              <thead>
                <tr>
                  <td className="text-lg text-teal-500 font-semibold">Sports</td>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {sports.map((sport) => (
                  <tr key={sport}><td>{sport}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-2">
          <h3 className="text-lg text-teal-500 font-semibold">Research History</h3>
          <p>{research_history.slice(0, 95)}...</p>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/colleges/${_id}`}><button className="btn btn-xs sm:btn-sm md:btn-md bg-teal-500 text-white hover:bg-[#072F60]">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
