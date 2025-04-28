import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../Constants/Router";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import useFormStore from "../../Store/formStore";

function Social() {
  const navigate = useNavigate();

  const { cvData, updateCvData } = useFormStore();

  const handleChange = (e) => {
    updateCvData(e.target.name, e.target.value);
  };

  const handleClick = () => {
    navigate(ROUTER.Education);
  };
  console.log("cvData", cvData);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 text-white">
      <h2 className="text-4xl font-bold text-pink-700 mb-8">Social</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500">
          <span className="text-xl text-pink-500">
            <FaLinkedin />
          </span>
          <input
            type="text"
            placeholder="LinkedIn URL"
            className="bg-transparent border-none outline-none flex-1 text-white px-3 placeholder-black"
            onChange={handleChange}
            name="linkedIn"
            value={cvData.linkedIn}
          />
        </div>

        <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500">
          <span className="text-xl text-pink-500">
            <FaGithub />
          </span>
          <input
            type="text"
            placeholder="Github URL"
            className="bg-transparent border-none outline-none flex-1 text-white px-3 placeholder-black"
            onChange={handleChange}
            name="github"
            value={cvData.github}
          />
        </div>

        <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500">
          <span className="text-xl text-pink-500">
            <FaTwitter />
          </span>
          <input
            type="text"
            placeholder="Twitter URL"
            className="bg-transparent border-none outline-none flex-1 text-white px-3 placeholder-black"
            onChange={handleChange}
            name="twitter"
            value={cvData.twitter}
          />
        </div>

        <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500">
          <span className="text-xl text-pink-500">
            <FaFacebook />
          </span>
          <input
            type="text"
            placeholder="Facebook URL"
            className="bg-transparent border-none outline-none flex-1 text-white px-3 placeholder-black"
            onChange={handleChange}
            name="faceBook"
            value={cvData.faceBook}
          />
        </div>

        <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500">
          <span className="text-xl text-pink-500">
            <FaInstagram />
          </span>
          <input
            type="text"
            placeholder="Instagram URL"
            className="bg-transparent border-none outline-none flex-1 text-white px-3 placeholder-black"
            onChange={handleChange}
            name="instagram"
            value={cvData.instagram}
          />
        </div>

        <div className="flex items-center border border-gray-600 rounded-lg px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500">
          <span className="text-xl text-pink-500">
            <FaGlobe />
          </span>
          <input
            type="text"
            placeholder="Website URL"
            className="bg-transparent border-none outline-none flex-1 text-white px-3 placeholder-black"
            onChange={handleChange}
            name="website"
            value={cvData.website}
          />
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="border border-pink-500 text-pink-500 px-6 py-2 rounded hover:bg-pink-500 hover:text-black transition"
        >
          PREV STEP
        </button>

        <button
          onClick={handleClick}
          className="border border-pink-500 text-pink-500 px-6 py-2 rounded hover:bg-pink-500 hover:text-black transition"
        >
          NEXT STEP
        </button>
      </div>
    </div>
  );
}

export default Social;
