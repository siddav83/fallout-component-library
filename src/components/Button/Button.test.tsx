import { describe, it, expect } from "vitest";
import Button from "../Button/Button";
import { render, screen } from "@testing-library/react";

describe("Render button on screen", () => {
  it("should display button component on screen", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
