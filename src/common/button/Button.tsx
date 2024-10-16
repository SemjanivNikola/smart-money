import { ButtonHTMLAttributes } from "react";
import Spinner from "../spinner/Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading: boolean;
  bStyle?: "primary" | "secondary" | "transparent" | "danger";
  wide?: boolean;
  onClick: () => void;
}

const Button = ({ title, type, isLoading, bStyle = "primary", wide = false, onClick }: ButtonProps) => (
  <button type={type} className={`button ${bStyle} ${wide ? "wide" : ""}`} onClick={onClick} disabled={isLoading}>
    {isLoading ? <Spinner /> : <>{title}</>}
  </button>
);

export default Button;
