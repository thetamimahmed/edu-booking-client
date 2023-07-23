import { useContext } from "react";
import { Container } from "../../Components/Shared/Container";

const Header = () => {
  return (
    <div className="bg-[#F6F7F9] py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[48%]">
            <h2 className="text-lg font-bold text-teal-500">
              DEVELOPED BY TO TEACHERS
            </h2>
            <h1 className="text-3xl lg:text-5xl text-[#072F60] lg:leading-[3.5rem] font-bold">
              Experience a learning platform that take you next level
            </h1>
            <p className="text-[#666666] text-lg my-6">
              World-class training and development programs <br /> developed by
              top teachers
            </p>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-500 text-white hover:bg-[#072F60]">
              Responsive
            </button>
          </div>
          <div className="lg:w-[48%]">
            <div className="flex gap-2 items-center">
              <span>
                <img
                  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
