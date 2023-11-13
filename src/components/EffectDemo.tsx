import React, { useEffect, useState } from "react";

interface IEffectProps {
  value: number
}

export const EffectDemo: React.FC<IEffectProps> = ({ value }) => {
  console.log("Redraw");
  useEffect(() => {
    console.log("always after component redraw");
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("mount || dependencies change");
  }, [value]);

  useEffect(() => {
    return () => { console.log("unmount"); }
  }, []);

  return (
    <p>{value}</p>
  );
}

export default EffectDemo;