import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 48,
      color: "#ff69b4", 
    }}
    spin
  />
);

const Loading = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
     
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999, 
    }}
  >
    <div style={{ textAlign: "center" }}>
      <Spin indicator={antIcon} />
      <div style={{ marginTop: 16, color: "#ff69b4", fontSize: 18, fontWeight: "bold" }}>
        Loading...
      </div>
    </div>
  </div>
);

export default Loading;
