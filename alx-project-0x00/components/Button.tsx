import React from "react";
import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded' }) => {
  const sizeStyles = {
      small: 'py-1 px-3 text-sm',
      medium: 'py-2 px-4 text-base',
      large: 'py-3 px-6 text-lg',
  };

  const shapeStyles = {
      square: 'rounded-sm',
      rounded: 'rounded-md',
      pill: 'rounded-full',
  };

  // Combine base styles with variant styles
  const buttonClasses = `
      bg-blue-500 
      text-white 
      font-bold 
      ${sizeStyles[size]} 
      ${shapeStyles[shape]}
  `;

  return (
    <button className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;