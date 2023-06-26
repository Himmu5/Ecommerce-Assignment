import { ButtonHTMLAttributes, FC } from "react";
type P = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<P> = ({ children }) => {
  return (
    <button className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md ">
      {children}
    </button>
  );
};
export default Button;
