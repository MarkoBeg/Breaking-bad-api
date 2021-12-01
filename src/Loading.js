import React from "react";
import Spinner from "./Spinner";
import "./Loading.css";

export default function Loading({ isLoading, data }) {
  return (
    <div>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div className="data">
          {data.map((char) => {
            return (
              <div key={char.char_id} className="dataCharacter-section">
                <img src={char.img} alt={char.name} />
                <h2>{char.category}</h2>
                <h4>Name: {char.name}</h4>
                <span>Date: {char.birthday}</span>
                <p>{char?.occupation}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
