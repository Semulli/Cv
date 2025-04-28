import React, { useState } from "react";
import { Box, Container, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { ROUTER } from "../../Constants/Router";
import useFormStore from "../../Store/formStore";

function Skills() {
  const navigate = useNavigate();
  const { updateCvData, cvData } = useFormStore();

  const [skillInput, setSkillInput] = useState("");

  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    if (skillInput.trim() === "") return;
    const updatedSkills = [...(cvData.skills || []), skillInput.trim()];
    updateCvData("skills", updatedSkills);
    setSkillInput("");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            color: "#a6004d",
            fontWeight: "bold",
            fontSize: "48px",
            textAlign: "center",
            mb: 6,
          }}
        >
          Skills
        </Box>

        <Box sx={{ position: "relative", mb: 8 }}>
          <TextField
            placeholder="Add Skill"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "transparent",
                border: "1px solid #e61780",
                color: "#fff",
                height: "60px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e61780",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e61780",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e61780",
              },
            }}
            value={skillInput}
            onChange={handleSkillChange}
          />
          <Button
            sx={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              minWidth: "40px",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#a6004d",
              color: "#000",
              "&:hover": {
                backgroundColor: "#e61780",
              },
            }}
            onClick={handleAddSkill}
          >
            <AddIcon />
          </Button>
        </Box>

        {/* Skill list */}
        <Box sx={{ mb: 6 }}>
          {(cvData.skills || []).map((skill, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-block",
                backgroundColor: "#e61780",
                color: "#000",
                padding: "8px 16px",
                borderRadius: "20px",
                marginRight: "8px",
                marginBottom: "8px",
              }}
            >
              {skill}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 6 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#e61780",
              color: "#000",
              borderRadius: "8px",
              px: 4,
              py: 1,
              "&:hover": {
                backgroundColor: "#e61780",
                borderColor: "#e61780",
              },
            }}
            onClick={() => navigate(-1)}
          >
            PREV STEP
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#e61780",
              color: "#000",
              borderRadius: "8px",
              px: 4,
              py: 1,
              "&:hover": {
                backgroundColor: "#e61780",
                borderColor: "#e61780",
              },
            }}
            onClick={() => navigate(ROUTER.Projects)}
          >
            NEXT STEP
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
