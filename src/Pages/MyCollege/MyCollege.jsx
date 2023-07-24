import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../Components/Shared/Container";
import { AuthContext } from "../../Provider/AuthProvider";
import ApplyCard from "./ApplyCard";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [admissions, setAdmissions] = useState([]);
  useEffect(() => {
    fetch(`https://edu-booking-server-blue.vercel.app/admissions/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmissions(data));
  }, [user?.email]);
  return (
    <Container>
      <div className="pb-20">
        <h1 className="mb-10 text-3xl font-bold text-[#072F60] border-b-4 border-teal-500 inline-block">
          Applied Colleges
        </h1>
        {admissions?.length < 1 ? (
          <h1 className="text-xl">Please <Link className="font-bold cursor-pointer text-teal-500" to="/admission">Apply</Link> Any College</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-10">
            {admissions.map((admission) => (
              <ApplyCard key={admission._id} admission={admission}></ApplyCard>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyCollege;
