import { create } from "zustand";

const useFormStore = create((set) => ({
  cvData: JSON.parse(localStorage.getItem("cv-storage")) || {
    name: "",
    surname: "",
    email: "",
    phone: "",
    jobTitle: "",
    drivingLicense: "",
    country: "",
    city: "",
    summary: "",
    linkedIn: "",
    github: "",
    twitter: "",
    faceBook: "",
    instagram: "",
    website: "",
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
    major: "",
    educationCity: "",
    companyName: "",
    companyCity: "",
    experienceTitle: "",
    experienceStartDate: "",
    experienceEndDate: "",
    experienceDescription: "",
    skills: [],
    projectTitle: "",
    projectDescription: "",
    projectLink: "",
    projectGithub: "",
    photo: "",
  },

  updateCvData: (key, value) => {
    set((state) => {
      const updatedData = { ...state.cvData, [key]: value };
      localStorage.setItem("cv-storage", JSON.stringify(updatedData));
      return { cvData: updatedData };
    });
  },
}));

export default useFormStore;
