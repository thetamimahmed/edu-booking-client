import { Container } from "../../Components/Shared/Container";
import { useLoaderData } from "react-router-dom";
import CollegeCard from "./CollegeCard";

const CollegeSection = () => {
  const data = useLoaderData();
  const colleges = data.slice(0, 3)

  return (
    <Container>
      <div className="pt-10 pb-20">
        <div className="relative">
          <div className="w-[95px] h-[22px] bg-[#ffd24d] rounded-full absolute md:left-[26%] lg:left-[36%] top-[24.3%] -z-10"></div>
          <h1 className="text-center text-[#072F60] text-4xl font-bold">
            Find Your College
          </h1>
        </div>
        <div className="text-center my-5">
          <input
            type="text"
            placeholder="Search College"
            className="text-lg input input-bordered w-full max-w-xs border-2 border-teal-600"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colleges.map((college) => (
            <CollegeCard key={college._id} college={college}></CollegeCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CollegeSection;
