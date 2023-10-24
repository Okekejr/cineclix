import React from "react";
import { render } from "@testing-library/react";
import { Hamburger } from "@/components/_icons/Hamburger";

test("Hamburger component renders without errors", () => {
  render(<Hamburger />);
});

test("Hamburger component has the correct fill color", () => {
  const { container } = render(<Hamburger />);
  const path = container.querySelector("path");

  expect(path).toHaveAttribute("fill", "#FAFAFC");
});
