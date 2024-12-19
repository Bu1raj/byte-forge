import React from "react";

export default function Button({ text, onClickFunction, color }) {

  const textHoverClassMap = {
    primary: "hover:text-primary",
    secondary: "hover:text-secondary",
    tertiary: "hover:text-tertiary",
  }

  return (
    <button
      className={`bg-${color} border border-${color} rounded py-1 px-3 flex justify-center items-center text-background font-medium transition duration-300 ease-in-out ${textHoverClassMap[color]} hover:bg-transparent`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
