import React from "react";
import RingLoader from "react-spinners/RingLoader";

export default function Spinner() {
  return (
    <div
      className="spinner"
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "lightseagreen",
      }}
    >
      <RingLoader size={500} color="#9013FE"></RingLoader>
    </div>
  );
}
