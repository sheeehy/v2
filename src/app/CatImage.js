import React, { useState } from "react";

function CatImage() {
  const playMeow = () => {
    const audio = new Audio("/public/meow.wav");
    audio.play();
  };

  return (
    <img src={cat} alt="Cat" className="mx-auto d-block" onClick={playMeow} />
  );
}

export default CatImage;
