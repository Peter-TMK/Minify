import React from "react";
import "./Button.css";
type ButtonProps = {
  label: string;
  variant?: "secondary";
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "secondary",
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`button button__${variant}`}>
      {label}
    </button>
  );
};

export default Button;
