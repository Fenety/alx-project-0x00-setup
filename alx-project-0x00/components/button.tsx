import React from "react";
import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    // 3. Use the props to render the button
    // We combine some base styles with the custom styles passed in
    <button className={`bg-blue-500 text-white font-bold ${styles}`}>
      {title}
    </button>
  );
};

export default Button;