import { render, screen } from "@testing-library/react";
import FileInput from "./FileInput";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Render file input on screen", () => {
  it("should display file input component on screen", () => {
    render(<FileInput label="Upload CSV File" />);
    expect(screen.getByText("Upload CSV File")).toBeInTheDocument();
  });
});
