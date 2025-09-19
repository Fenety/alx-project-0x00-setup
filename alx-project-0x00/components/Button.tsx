import React from "react";
import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  // Combine base styles with the custom styles passed in
  const buttonClasses = `
    bg-blue-500 
    text-white 
    font-bold 
    ${styles} 
  `;

  return (
    <button className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;