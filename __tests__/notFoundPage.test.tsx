import NotFoundPage from "@/pages/404";
import { render, screen } from "@testing-library/react";

test("renders the 404 error message", () => {
  render(<NotFoundPage />);
  const errorHeading = screen.getByText("Error 404");
  const errorMessage = screen.getByText("The current page is not available.");

  expect(errorHeading).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
});

test("renders a link to the home page", () => {
  render(<NotFoundPage />);
  const homeLink = screen.getByRole("link", {
    name: "Head over to home page.",
  });

  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute("href", "/");
});
