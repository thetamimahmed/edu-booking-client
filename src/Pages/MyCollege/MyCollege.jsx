import { useLoaderData } from "react-router-dom";
import { Container } from "../../Components/Shared/Container";
import ApplyCard from "./ApplyCard";

const MyCollege = () => {
    const admissions = useLoaderData()
  return (
    <Container>
      <div className="pb-20">
        <h1 className="mb-10 text-3xl font-bold text-[#072F60] border-b-4 border-teal-500 inline-block">
          Applied Colleges {admissions.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-10">
            {admissions.map(admission => <ApplyCard key={admission._id} admission={admission}></ApplyCard>)}
        </div>
      </div>
    </Container>
  );
};

export default MyCollege;
