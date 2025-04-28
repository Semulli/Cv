import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../Constants/Router";
import useFormStore from "../../Store/formStore";

function Projects() {
  const navigate = useNavigate();
  const { updateCvData, cvData } = useFormStore();

  const handleChangeProject = (e) => {
    updateCvData(e.target.name, e.target.value);
  };

  const handleAddProject = () => {
    navigate(ROUTER.Preview);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>Projects</div>

      <div style={styles.container}>
        <div style={styles.grid}>
          <input
            placeholder="Project Title*"
            name="projectTitle"
            value={cvData.projectTitle}
            onChange={handleChangeProject}
            style={styles.input}
            required
          />
          <input
            placeholder="Github Link"
            name="projectGithub"
            value={cvData.projectGithub}
            onChange={handleChangeProject}
            style={styles.input}
            required
          />
        </div>

        <input
          placeholder="Live Project"
          name="projectLink"
          value={cvData.projectLink}
          onChange={handleChangeProject}
          style={{ ...styles.input, marginBottom: "20px" }}
          required
        />

        <div style={styles.label}>Description</div>

        <div style={styles.editor}>
          <textarea rows="6" style={styles.textarea}></textarea>
        </div>

        <div style={styles.navigation}>
          <button className="border border-pink-500 text-pink-500 px-6 py-2 rounded hover:bg-pink-500 hover:text-black transition" onClick={() => navigate(-1)}>
            PREV STEP
          </button>

        

          <button className="border border-pink-500 text-pink-500 px-6 py-2 rounded hover:bg-pink-500 hover:text-black transition" onClick={handleAddProject}>
            NEXT STEP
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
  },
  header: {
    color: "#a6004d",
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "30px",
    marginTop: "20px",
  },
  container: {
    width: "100%",
    maxWidth: "1000px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e41981",

    color: "#000",
    outline: "none",
    fontSize: "16px",
  },
  label: {
    color: "#000",
    marginBottom: "8px",
    fontSize: "16px",
  },
  editor: {
    border: "1px solid #e41981",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "24px",
  },

  iconButton: {
    minWidth: "40px",
    background: "none",
    border: "none",
    color: "#999",
    fontSize: "18px",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    height: "100%",
    resize: "none",
    background: "transparent",
    border: "1px ",
    outline: "none",
    color: "#000",
    fontSize: "16px",
  },
  addButton: {
    border: "1px solid #a6004d",
    color: "#a6004d",
    borderRadius: "8px",
    padding: "12px 24px",
    marginBottom: "40px",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s",
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginTop: "32px",
    marginBottom: "32px",
  },
  navButton: {
    border: "1px solid #a6004d",
    color: "#a6004d",
    borderRadius: "8px",
    padding: "12px 24px",
    width: "180px",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s",
  },
  stepCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#a6004d",
    color: "#fff",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
};

export default Projects;
