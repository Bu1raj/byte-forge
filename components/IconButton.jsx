import React from "react";

export default function IconButton({ Icon, onClickFunction, color, text }) {

  const textHoverClassMap = {
    primary: "hover:text-primary",
    secondary: "hover:text-secondary",
    tertiary: "hover:text-tertiary",
  }

  return (
    <button
      className={`bg-${color} border border-${color} rounded py-1 px-3 flex gap-2 justify-center items-center text-background font-medium transition duration-300 ease-in-out ${textHoverClassMap[color]} hover:bg-transparent`}
      onClick={onClickFunction}
    >
      <Icon fill="currentColor" size={20} />
      {text}
    </button>
  );
}
