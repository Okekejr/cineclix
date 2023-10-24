import { Logo } from "@/components/logo";
import { render, screen } from "@testing-library/react";

test("renders the Logo component", () => {
  render(<Logo />);
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});
