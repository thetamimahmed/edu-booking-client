import { useLoaderData } from "react-router-dom";
import { Container } from "../../Components/Shared/Container";
import AdmissionCard from "./AdmissionCard";

const Admission = () => {
    const colleges = useLoaderData()
  return (
    <Container>
      <div className="pt-5 pb-20">
        <h2 className="mb-10 text-3xl font-bold text-[#072F60] border-b-4 border-teal-500 inline-block">Admission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colleges.map((college) => (
            <AdmissionCard key={college._id} college={college}></AdmissionCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Admission;
