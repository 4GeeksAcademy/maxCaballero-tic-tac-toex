import React, { useState } from "react";
import TicTacToe from "./ticTacToe";

// Incluye imágenes en tu bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
  return (
    <div className="text-center">
      <h1>TicTacToe con React</h1>
      <TicTacToe />
    </div>
  );
};

export default Home;
