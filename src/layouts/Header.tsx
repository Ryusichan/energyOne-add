import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "64px",
        top: 0,
        left: 0,
        background: "orange",
        zIndex: -1,
      }}
    ></div>
  );
};

export default Header;
