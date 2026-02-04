import Button from "./components/Button/Button";
import "./App.css";
import { css } from "@emotion/css";
import FileInput from "./components/FileInput/FileInput";

const containerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const buttonContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function App() {
  return (
    <>
      <div className={containerStyle}>
        <div className={buttonContainerStyle}>
          <Button size="small">Button</Button>
          <Button size="medium" variant="secondary">
            Button
          </Button>
          <Button size="large" variant="tertiary">
            Button
          </Button>
          <FileInput label="Upload CSV File" />
        </div>
      </div>
    </>
  );
} // jsx

export default App;
