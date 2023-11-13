import React, { useEffect, useState } from "react";

interface IEffectProps {
  value: number
}

export const EffectDemo: React.FC<IEffectProps> = ({ value }) => {
  console.log("Redraw");
  useEffect(() => {
    console.log("Effect1");
  });
  return (
    <p>{value}</p>
  );
}

export default EffectDemo;