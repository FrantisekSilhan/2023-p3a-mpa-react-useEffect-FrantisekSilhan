import React, { useEffect, useState } from "react";

interface IEffectProps {
  value: number
}

export const EffectDemo: React.FC<IEffectProps> = ({ value }) => {
  const [text, setText] = useState<string>("");
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setText(x => x + event.key);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => { window.removeEventListener("keydown", handleKeyDown) }
  }, []);

  return (
    <p>{value}{text}</p>
  );
}

export default EffectDemo;