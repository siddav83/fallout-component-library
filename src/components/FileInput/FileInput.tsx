import { css } from "@emotion/css";
import { useRef, type InputHTMLAttributes } from "react";
import Button from "../Button/Button";

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FileInput = ({ label, ...props }: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const positionBaseStyle = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  `;
  const inputBaseStyle = css`
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
  `;

  return (
    <div className={positionBaseStyle}>
      <label>{label}</label>
      <input className={inputBaseStyle} ref={inputRef} type="file" {...props} />
      {/* <input className={inputBaseStyle} type="file" {...props} /> */}
      <Button onClick={() => inputRef?.current?.click()}>Upload</Button>
    </div>
  );
};

export default FileInput;
