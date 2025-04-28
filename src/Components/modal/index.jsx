import React, { useState } from "react";
import { Button, Modal, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../Constants/Router";

const PreviewModal = () => {
  const [openResponsive, setOpenResponsive] = useState(false);
  const navigate = useNavigate();

  return (
    <Row justify="center" align="middle">
      <Col>
        <Button
          type="default"
          onClick={() => {
            console.log("Preview butonuna tıklandı!");
            setOpenResponsive(true); 
          }}
          style={{
            backgroundColor: "#fc64b6",
            color: "white",
            fontWeight: "600",
            border: "none",
            
          }}
        
        >
          Preview
        </Button>
      </Col>

   
      <Modal
        title="Preview"
        centered
        open={openResponsive} 
        onCancel={() => {
          console.log("Modal kapandı");
          setOpenResponsive(false); 
        }}
        footer={null}
        width="80%"
        style={{
          zIndex: 1000, 
        }}
      >
        <Button
          type="default"
          style={{
            backgroundColor: "#f472b6",
            color: "white",
            fontWeight: "600",
            border: "none",
          }}
          className="m-2 hover:bg-pink-500"
          onClick={() => navigate(ROUTER.Home)}
        >
          Home
        </Button>
        <Button
          type="default"
          style={{
            backgroundColor: "#f472b6",
            color: "white",
            fontWeight: "600",
            border: "none",
          }}
          className="m-2 hover:bg-pink-500"
          onClick={() => navigate(ROUTER.Info)}
        >
          Personal Informations
        </Button>
        <Button
          type="default"
          style={{
            backgroundColor: "#f472b6",
            color: "white",
            fontWeight: "600",
            border: "none",
          }}
          className="m-2 hover:bg-pink-500"
          onClick={() => navigate(ROUTER.Education)}
        >
          Education
        </Button>
        <Button
          type="default"
          style={{
            backgroundColor: "#f472b6",
            color: "white",
            fontWeight: "600",
            border: "none",
          }}
          className="m-2 hover:bg-pink-500"
          onClick={() => navigate(ROUTER.Social)}
        >
          Social
        </Button>
        <Button
          type="default"
          style={{
            backgroundColor: "#f472b6",
            color: "white",
            fontWeight: "600",
            border: "none",
          }}
          className="m-2 hover:bg-pink-500"
          onClick={() => navigate(ROUTER.Projects)}
        >
          Projects
        </Button>
        <Button
          type="default"
          style={{
            backgroundColor: "#f472b6",
            color: "white",
            fontWeight: "600",
            border: "none",
          }}
          className="m-2 hover:bg-pink-500"
          onClick={() => navigate(ROUTER.Experience)}
        >
          Professional experiences
        </Button>
        <Button
          type="default"
          style={{
            backgroundColor: "#f472b6",
            color: "white",
            fontWeight: "600",
            border: "none",
          }}
          className="m-2 hover:bg-pink-500"
          onClick={() => navigate(ROUTER.Skills)}
        >
          Skills
        </Button>
      </Modal>
    </Row>
  );
};

export default PreviewModal;
