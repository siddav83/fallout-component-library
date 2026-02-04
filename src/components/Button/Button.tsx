import type { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

const Button = ({
  children,
  variant = "primary",
  size = "small",
  ...props
}: ButtonProps) => {
  const buttonBaseStyle = css`
    max-width: 100px;
    background-color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    border-radius: 15px;
    cursor: pointer;
    letter-spacing: 0.025em;
    &:hover {
      background-color: transparent;
      color: white;
    }
  `;

  const secondaryStyle = css`
    color: white;
    background-color: #000e24;
  `;
  const tertiaryStyle = css`
    color: white;
    background-color: transparent;
    border: 1px solid white;
    &:hover {
      background-color: white;
      color: black;
    }
  `;

  const smallStyle = css`
    font-size: 12px;
    padding: 5px 10px;
  `;
  const mediumStyle = css`
    font-size: 16px;
    padding: 10px 15px;
  `;
  const largeStyle = css`
    font-size: 20px;
    padding: 15px 20px;
  `;
  const sizeStyle = css`
    ${size === "small" && smallStyle}
    ${size === "medium" && mediumStyle}
    ${size === "large" && largeStyle}
  `;
  const styles = css(
    buttonBaseStyle,
    variant === "secondary" && secondaryStyle,
    variant === "tertiary" && tertiaryStyle,
  );
  return (
    <button className={`${styles} ${sizeStyle}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
