import { useLoaderData } from "react-router-dom";
import { Container } from "../../Components/Shared/Container";
import Lottie from "lottie-react";
import formAnimation from "../../form-animation.json";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";



const AdmissionForm = () => {
  const college = useLoaderData();

  const {user} = useContext(AuthContext)

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const number = form.number.value;
    const address = form.address.value;
    const birth = form.birth.value;
    const image = form.image.files[0];
    const university = college.college_name
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const admissionDetail = {name, email, university, subject, number, address, birth, imageUrl, userMail: user.email}
        console.log(admissionDetail)
        fetch('http://localhost:5000/admissions', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(admissionDetail)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                toast.success("Admission Done Successfully");
                form.reset()
            }
        })
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  }

  return (
    <Container>
      <div className="pb-20">
        <h1 className="mb-10 text-3xl font-bold text-[#072F60] border-b-4 border-teal-500 inline-block">
          Book your seat at {college.college_name}
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly gap-4">
          <div className="md:w-1/3">
          <Lottie animationData={formAnimation} />
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-3">
              <label className="text-sm block" htmlFor="name">
                Candidate Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 border rounded-md border-teal-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                placeholder="Candidate Name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-sm block" htmlFor="email">
                Candidate Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md border-teal-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                placeholder="Candidate Email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-sm block" htmlFor="subject">
                Subject
              </label>
              <select
                name="subject"
                className="select select-bordered w-full px-3 py-2 border rounded-md border-teal-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
              >
                <option disabled selected>
                  Subject
                </option>
               {
                college.subjects.map(subject => <option key={subject}>{subject}</option>)
               }
              </select>
            </div>
            <div className="mb-3">
              <label className="text-sm block" htmlFor="number">
                Candidate Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="w-full px-3 py-2 border rounded-md border-teal-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                placeholder="Candidate Phone Number"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-sm block" htmlFor="image">
                Candidate Image
              </label>

              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                className="mt-2 cursor-pointer w-full  px-3 py-2 border rounded-md border-teal-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-sm block" htmlFor="address">
                Candidate Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="w-full px-3 py-2 border rounded-md border-teal-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                placeholder="Candidate Address"
                required
              />
            </div>
            <div className="mb-3 md:col-span-2">
              <label className="text-sm block" htmlFor="birth">
                Date Of Birth
              </label>
              <input
                type="date"
                name="birth"
                id="birth"
                className="w-full px-3 py-2 border rounded-md border-teal-300 focus:outline-teal-500 bg-gray-100 text-gray-900"
                placeholder="Date Of Birth"
                required
              />
            </div>
            <div className="text-center md:col-span-2">
              <button className="btn btn-block bg-teal-500 text-white hover:bg-[#072F60]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AdmissionForm;
