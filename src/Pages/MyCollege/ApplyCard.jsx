import { BiRightArrowCircle } from "react-icons/bi";

const ApplyCard = ({ admission }) => {
  const {
    name,
    email,
    university,
    subject,
    number,
    address,
    birth,
    imageUrl,
  } = admission;
  return (
    <div className="card card-compact mb-14 bg-teal-50 relative lg:shadow-lg">
      <div className="avatar absolute -top-10 left-[37%] md:left-[41.7%]">
        <div className="w-24 rounded-full ring ring-teal-500 ring-offset-base-100 ring-offset-2">
          <img src={imageUrl} />
        </div>
      </div>
      <div className="card-body mt-10">
        <h2 className="text-center text-xl font-semibold text-[#072F60] mt-2">
          {name}
        </h2>
        <p className="text-center -mt-2">{email}</p>
        <p className="text-center -mt-2">{number}</p>
        <p className="text-center font-semibold flex justify-center items-center gap-2">
          University{" "}
          <span className="text-xl text-teal-500">
            <BiRightArrowCircle />
          </span>{" "}
          {university}
        </p>
        <div className="md:flex justify-center">
          <p className="md:text-end font-semibold">Address > {address}</p>
          <div className="w-1 h-5 hidden md:block mx-1 bg-teal-500"></div>
          <p className=" font-semibold">Date Of Birth > {birth}</p>
        </div>
        <p className="text-center font-semibold flex justify-center items-center gap-2">
          Subject{" "}
          <span className="text-xl text-teal-500">
            <BiRightArrowCircle />
          </span>{" "}
          {subject}
        </p>
      </div>
    </div>
  );
};

export default ApplyCard;
