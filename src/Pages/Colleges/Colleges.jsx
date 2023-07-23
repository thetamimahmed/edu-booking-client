import { useLoaderData } from "react-router-dom";
import { Container } from "../../Components/Shared/Container";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsArrowBarDown } from "react-icons/bs";

const Colleges = () => {
  const college = useLoaderData();
  const {
    college_image,
    college_name,
    admission_dates,
    events,
    research_history,
    research_works,
    sports,
    admission_process,
  } = college;
  return (
    <Container>
      <div className="pb-20">
        <div className="h-[250px] md:h-[350px] lg:h-[475px] w-full">
          <img src={college_image} className="h-full w-full" alt="" />
        </div>
        <div>
          <h1 className="text-5xl text-center text-teal-500 font-bold mt-2 mb-10">
            {college_name}
          </h1>
        </div>
        <div className="lg:flex gap-4">
          <div className="card card-side bg-base-100 h-96 lg:w-1/2 shadow-xl">
            <div className="hidden md:block">
              <img
                className="h-full"
                src="https://i.ibb.co/Zmnpkx9/college-student-gff4e6cea3-1280.jpg"
                alt="Admission"
              />
            </div>
            <div className="flex flex-col justify-evenly mx-auto">
              <h2 className="font-bold text-3xl text-center text-[#072F60]">
                Admission On
              </h2>
              <div className="border-4 border-teal-500 p-2 rounded-full mt-4">
                <p className="text-center text-xl font-semibold flex justify-center items-center gap-2 uppercase">
                  Fall{" "}
                  <span className="text-2xl text-teal-500">
                    <BiRightArrowCircle />
                  </span>{" "}
                  {admission_dates.fall}
                </p>
              </div>
              <div className="border-4 border-teal-500 p-2 rounded-full mt-4 ">
                <p className="text-center text-xl font-semibold flex justify-center items-center gap-2 uppercase">
                  spring{" "}
                  <span className="text-2xl text-teal-500">
                    <BiRightArrowCircle />
                  </span>{" "}
                  {admission_dates.spring}
                </p>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 lg:h-96 lg:w-1/2 shadow-xl my-5 p-5 md:my-0 md:p-0 flex-col md:flex-row">
            <div className="md:card-body">
              <h2 className="font-bold text-3xl text-center text-[#072F60] pb-2 mb-8 border-b-4 border-teal-500">
                Events
              </h2>
              {events.map((event) => (
                <div key={event} className="mb-3">
                  <p className="flex gap-2 text-xl items-center">
                    <span className="text-2xl text-teal-500">
                      <BiRightArrowCircle />
                    </span>{" "}
                    {event}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:card-body">
              <h2 className="font-bold text-3xl text-center text-[#072F60] pb-2 mb-8 border-b-4 border-teal-500">
                Sports
              </h2>
              {sports.map((sport) => (
                <div key={sport} className="mb-3">
                  <p className="flex gap-2 text-xl items-center">
                    <span className="text-2xl text-teal-500">
                      <BiRightArrowCircle />
                    </span>{" "}
                    {sport}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card card-side flex flex-col md:flex-row justify-center gap-3 bg-base-100 p-10 mt-10 shadow-xl">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-3xl text-[#072F60]">
                Research History
              </h2>
              <BsArrowBarDown className="text-center" size={40} />
            </div>
            <p className="text-lg text-justify">{research_history}</p>
          </div>
          <div className="w-5 mt-4 h-56 hidden md:block bg-teal-500"></div>
          <div className="md:w-1/2">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-3xl text-[#072F60]">
                Research Works
              </h2>
              <BsArrowBarDown className="text-center" size={40} />
            </div>
            <p className="text-lg text-justify">{research_works}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-3xl text-center text-[#072F60] pb-2 mb-8 border-b-4 border-teal-500">
            Admission Process
          </h2>
          <p className="text-justify">{admission_process}</p>
        </div>
      </div>
    </Container>
  );
};

export default Colleges;
