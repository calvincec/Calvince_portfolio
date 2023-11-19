import React from "react";

const Education = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h2>Education</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <a href="https://eie.uonbi.ac.ke/">
            <div>
            <h3>University of Nairobi</h3>
            
            </div>
            <div>
            <h3>Electrical and Electronics Engineering</h3>
            <p>2021 - 2026</p>
            </div>
        </a>
      </div>
    </div>
  );
};

export default Education;