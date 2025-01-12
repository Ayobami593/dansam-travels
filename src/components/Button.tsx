import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ className = "", children, ...props }: ButtonProps) => {
  return (
    <button className={`${className} rounded-md cursor-pointer`} {...props}>
      {children}
    </button>
  );
};

export default Button;
