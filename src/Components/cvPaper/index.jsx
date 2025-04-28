import React, { useRef } from "react";
import useFormStore from "../../Store/formStore";
import { jsPDF } from "jspdf";
import PreviewModal from "../modal";

function PaperComponent() {
  const { cvData } = useFormStore();
  const paperRef = useRef();

  const handleDownload = () => {
    const doc = new jsPDF();

    const content = `
 
    
    Name: ${cvData.name || ""} ${cvData.surname || ""}
    
    Email: ${cvData.email || ""}
    
    Phone: ${cvData.phone || ""}
    
    Job Title: ${cvData.jobTitle || ""}
    
    Driving License: ${cvData.drivingLicense || ""}
    
    Country: ${cvData.country || ""}
    
    City: ${cvData.city || ""}
    
    Summary: ${cvData.summary || ""}
  `;

    doc.text(content, 10, 10);

    doc.save("cv.pdf");
  };

  const savedData = localStorage.getItem("cv-storage");
  console.log("Saved CV Data:", savedData);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={handleDownload}
          className="rounded bg-pink-400 hover:bg-pink-500 text-white font-semibold py-1 px-2 m-2 transition-colors"
        >
          Download PDF
        </button>
        <PreviewModal />
      </div>

      <div
        ref={paperRef}
        className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 min-h-[400px] max-w-[90%] md:max-w-[800px] mx-auto my-4 text-black"
      >
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center gap-6 mb-6">
          {cvData.photo && (
            <img
              src={cvData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-pink-600"
            />
          )}
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            {(cvData.name || "") + " " + (cvData.surname || "")}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {cvData.email && (
              <p className="mb-1">
                <strong>Email:</strong> {cvData.email}
              </p>
            )}
            {cvData.phone && (
              <p className="mb-1">
                <strong>Phone:</strong> {cvData.phone}
              </p>
            )}
            {cvData.jobTitle && (
              <p className="mb-1">
                <strong>Job Title:</strong> {cvData.jobTitle}
              </p>
            )}
            {cvData.drivingLicense && (
              <p className="mb-1">
                <strong>Driving License:</strong> {cvData.drivingLicense}
              </p>
            )}
          </div>
          <div>
            {cvData.country && (
              <p className="mb-1">
                <strong>Country:</strong> {cvData.country}
              </p>
            )}
            {cvData.city && (
              <p className="mb-1">
                <strong>City:</strong> {cvData.city}
              </p>
            )}
          </div>
        </div>

        {cvData.summary && (
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Summary</h2>
            <p className="mb-4">{cvData.summary}</p>
          </section>
        )}

        {(cvData.linkedIn ||
          cvData.github ||
          cvData.twitter ||
          cvData.faceBook ||
          cvData.instagram ||
          cvData.website) && (
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Social Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cvData.linkedIn && <p>LinkedIn: {cvData.linkedIn}</p>}
              {cvData.github && <p>Github: {cvData.github}</p>}
              {cvData.twitter && <p>Twitter: {cvData.twitter}</p>}
              {cvData.faceBook && <p>Facebook: {cvData.faceBook}</p>}
              {cvData.instagram && <p>Instagram: {cvData.instagram}</p>}
              {cvData.website && <p>Website: {cvData.website}</p>}
            </div>
          </section>
        )}

        {(cvData.institution ||
          cvData.degree ||
          cvData.major ||
          cvData.educationCity ||
          cvData.startDate ||
          cvData.endDate ||
          cvData.description) && (
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Education
            </h2>
            <div className="space-y-1">
              {cvData.institution && <p>Institution: {cvData.institution}</p>}
              {cvData.degree && <p>Degree: {cvData.degree}</p>}
              {cvData.major && <p>Major: {cvData.major}</p>}
              {cvData.educationCity && <p>City: {cvData.educationCity}</p>}
              {(cvData.startDate || cvData.endDate) && (
                <p>
                  Start - End: {cvData.startDate} - {cvData.endDate}
                </p>
              )}
              {cvData.description && <p>Description: {cvData.description}</p>}
            </div>
          </section>
        )}

        {(cvData.companyName ||
          cvData.companyCity ||
          cvData.experienceTitle ||
          cvData.experienceStartDate ||
          cvData.experienceEndDate ||
          cvData.experienceDescription) && (
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Experience
            </h2>
            <div className="space-y-1">
              {cvData.companyName && <p>Company Name: {cvData.companyName}</p>}
              {cvData.companyCity && <p>City: {cvData.companyCity}</p>}
              {cvData.experienceTitle && <p>Title: {cvData.experienceTitle}</p>}
              {(cvData.experienceStartDate || cvData.experienceEndDate) && (
                <p>
                  Start - End: {cvData.experienceStartDate} -{" "}
                  {cvData.experienceEndDate}
                </p>
              )}
              {cvData.experienceDescription && (
                <p>Description: {cvData.experienceDescription}</p>
              )}
            </div>
          </section>
        )}

        {cvData.skills?.length > 0 && (
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside mb-4">
              {cvData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {(cvData.projectTitle ||
          cvData.projectDescription ||
          cvData.projectLink ||
          cvData.projectGithub) && (
          <section className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Projects</h2>
            <div className="space-y-1">
              {cvData.projectTitle && <p>Title: {cvData.projectTitle}</p>}
              {cvData.projectDescription && (
                <p>Description: {cvData.projectDescription}</p>
              )}
              {cvData.projectLink && <p>Link: {cvData.projectLink}</p>}
              {cvData.projectGithub && <p>Github: {cvData.projectGithub}</p>}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default PaperComponent;
