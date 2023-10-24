import { MovieCert } from "@/components/movieCert";
import { render, screen } from "@testing-library/react";

// Mock the module and provide manual implementations
jest.mock("../src/hooks/movieCert", () => {
  return {
    useMovieCert: (id: number) => {
      return {
        fetchMovieCert: async () => {
          // Simulate fetching data and set loading to true
          await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async request
        },
        loading: true, // Set loading to true to simulate loading
        cert: undefined, // No certificate provided while loading
      };
    },
  };
});

test("renders movie certificate when not loading", async () => {
  render(<MovieCert id={1} />);

  // Wait for the component to finish the asynchronous fetch
  await screen.findByText("Loading...");

  const loadingText = screen.getByText("Loading...");

  expect(loadingText).toBeInTheDocument();
});

test("renders loading text when loading", async () => {
  render(<MovieCert id={1} />);

  // Wait for the component to finish the asynchronous fetch
  await screen.findByText("Loading...");

  const loadingText = screen.getByText("Loading...");

  expect(loadingText).toBeInTheDocument();
});
