import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../Constants/Router";
import useFormStore from "../../Store/formStore";

function Information() {
  const navigate = useNavigate();
  const { cvData, updateCvData } = useFormStore();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateCvData("photo",reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleChange(e) {
    updateCvData(e.target.name, e.target.value);
  }

  const handleClick = () => {
    navigate(ROUTER.Social);
  };

  return (
    <div className="min-h-screen text-black relative overflow-hidden px-6 py-10">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-800 text-center mb-2">
          Personal Informations
        </h2>

        {!cvData.photo && (
          <div className="flex justify-center mb-10">
            <label htmlFor="photo-upload" className="cursor-pointer">
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-black font-bold text-sm">
                Upload Photo
              </div>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          </div>
        )}

        {cvData.photo && (
          <div className="flex justify-center mb-10">
            <img
              src={cvData.photo}
              alt="User Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-pink-600"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-pink-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="name"
              onChange={handleChange}
              value={cvData.name}
            />
          </div>

          <div>
            <label className="block text-pink-600 mb-1">Surname</label>
            <input
              type="text"
              placeholder="Surname"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="surname"
              onChange={handleChange}
              value={cvData.surname}
            />
          </div>

          <div>
            <label className="block text-pink-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="email"
              onChange={handleChange}
              value={cvData.email}
            />
          </div>

          <div>
            <label className="block text-pink-600 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="phone"
              onChange={handleChange}
              value={cvData.phone}
            />
          </div>

          <div>
            <label className="block text-pink-600 mb-1">Job Title</label>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="jobTitle"
              onChange={handleChange}
              value={cvData.jobTitle}
            />
          </div>

          <div>
            <label className="block text-pink-600 mb-1">Driving License</label>
            <input
              type="text"
              placeholder="Driving License"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="drivingLicense"
              onChange={handleChange}
              value={cvData.drivingLicense}
            />
          </div>

          <div>
            <label className="block text-pink-600 mb-1">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="country"
              onChange={handleChange}
              value={cvData.country}
            />
          </div>

          <div>
            <label className="block text-pink-600 mb-1">City</label>
            <input
              type="text"
              placeholder="City"
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="city"
              onChange={handleChange}
              value={cvData.city}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-pink-600 mb-1">Summary</label>
            <textarea
              className="w-full border border-pink-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              name="summary"
              onChange={handleChange}
              value={cvData.summary}
              placeholder="Summary"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <button
            className="bg-transparent border border-pink-500 text-pink-500 px-6 py-2 rounded hover:bg-pink-500 hover:text-white transition"
            onClick={() => {
              navigate(-1);
            }}
          >
            HOME
          </button>
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition"
            onClick={handleClick}
          >
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;
