import { render } from "@testing-library/react";
import Home from "@/pages";

jest.mock("../src/components/home", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="homepage-mock">Mocked HomePage</div>,
  };
});

test("renders the HomePage component", () => {
  const { getByTestId } = render(<Home />);
  const homepageMock = getByTestId("homepage-mock");

  expect(homepageMock).toBeInTheDocument();
  expect(homepageMock).toHaveTextContent("Mocked HomePage");
});

afterEach(() => {
  jest.unmock("../src/components/home");
});
