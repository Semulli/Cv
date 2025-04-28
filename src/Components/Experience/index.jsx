import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../Constants/Router";
import useFormStore from "../../Store/formStore";

function Experience() {
  const navigate = useNavigate();
  const { cvData, updateCvData } = useFormStore();

  const handleInputChange = (e) => {
    updateCvData(e.target.name, e.target.value);
  };

  const handleClick = () => {
    navigate(ROUTER.Skills);
  };

  console.log("cvData", cvData);
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4 py-10">
      <div className="w-full max-w-4xl p-8 rounded-lg ">
        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">
          Professional Experience
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1  text-pink-900">Company*</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-pink-600  text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                name="companyName"
                value={cvData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1  text-pink-900">Job Title*</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-pink-600  text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                name="experienceTitle"
                value={cvData.experienceTitle}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1  text-pink-900">City</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-pink-600  text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                name="companyCity"
                value={cvData.companyCity}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block mb-1  text-pink-900">Start Date</label>
              <input
                type="date"
                className="w-full p-3 rounded border border-pink-600  text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                name="experienceStartDate"
                value={cvData.experienceStartDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1  text-pink-900">End Date</label>
              <input
                type="date"
                className="w-full p-3 rounded border border-pink-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                name="experienceEndDate"
                value={cvData.experienceEndDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-pink-900">Description</label>
            <textarea
              className="w-full h-24 p-3 rounded border border-pink-600  text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              onChange={handleInputChange}
              name="experienceDescription"
              value={cvData.experienceDescription}
            />
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              className="border border-pink-500 text-pink-500 px-6 py-2 rounded hover:bg-pink-500 hover:text-black transition"
              onClick={() => navigate(-1)}
            >
              PREV STEP
            </button>
          
            <button
              className="border border-pink-500 text-pink-500 px-6 py-2 rounded hover:bg-pink-500 hover:text-black transition"
              onClick={handleClick}
            >
              NEXT STEP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
