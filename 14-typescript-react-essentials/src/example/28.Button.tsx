import React from 'react';
export interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const baseStyle = 'px-4 py-2 rounded font-semibold shadow-md';
  const variantStyle =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
return (
    <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;