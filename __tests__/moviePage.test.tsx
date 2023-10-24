import React from "react";
import { render } from "@testing-library/react";
import MoviePage from "@/components/_pages/moviesPage";

jest.mock("../src/hooks/movieCert", () => ({
  useMovieCert: (id: number) => ({
    cert: "PG-13", // Mocked certification data
    setCert: jest.fn(),
    loading: false,
    setLoading: jest.fn(),
    fetchMovieCert: jest.fn(),
  }),
}));

const mockData = {
  adult: false,
  backdrop_path: "/backdrop-image.jpg",
  belongs_to_collection: null,
  budget: 10000000,
  genres: [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
  ],
  homepage: "https://www.example.com",
  id: 12345,
  imdb_id: "tt1234567",
  original_language: "en",
  original_title: "Original Title",
  overview: "This is the movie overview.",
  popularity: 123.45,
  poster_path: "/poster-image.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/company1-logo.png",
      name: "Company A",
      origin_country: "US",
    },
    {
      id: 2,
      logo_path: "/company2-logo.png",
      name: "Company B",
      origin_country: "CA",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States",
    },
    {
      iso_3166_1: "CA",
      name: "Canada",
    },
  ],
  release_date: "2023-10-15",
  revenue: 50000000,
  runtime: 120,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "French",
      iso_639_1: "fr",
      name: "Français",
    },
  ],
  status: "Released",
  tagline: "Tagline of the movie",
  title: "Movie Title",
  video: false,
  vote_average: 7.8,
  vote_count: 500,
};

const mockSocials = {
  facebook_id: "facebook123",
  instagram_id: "instagram123",
  twitter_id: "twitter123",
  id: 1,
  imdb_id: "tt1234567",
  wikidata_id: "Q12345",
};

test("renders MoviePage component with provided data", () => {
  const { getByText, getByAltText, getByTestId } = render(
    <MoviePage data={mockData} socials={mockSocials} />
  );

  // Assertions for movie data
  expect(getByText("Movie Title")).toBeInTheDocument();
  expect(getByText("This is the movie overview.")).toBeInTheDocument();

  // Assertions for runtime, release date, and user score
  expect(getByText("02h 00m")).toBeInTheDocument();
  expect(getByText("Sat Oct 14 2023")).toBeInTheDocument();
  expect(getByText("User Score")).toBeInTheDocument();

  // Additional assertions for image alt text
  expect(getByAltText("Movie Title")).toBeInTheDocument();

  // Assertions for the movie overview
  expect(getByText("Overview")).toBeInTheDocument();
  expect(getByText("This is the movie overview.")).toBeInTheDocument();

  // Assertions for external links
  expect(getByTestId("https://instagram.com/instagram123")).toHaveAttribute(
    "href",
    "https://instagram.com/instagram123"
  );
  expect(getByTestId("https://facebook.com/facebook123")).toHaveAttribute(
    "href",
    "https://facebook.com/facebook123"
  );
  expect(getByTestId("https://twitter.com/twitter123")).toHaveAttribute(
    "href",
    "https://twitter.com/twitter123"
  );

  // Assertions for the social media icons
  expect(getByTestId("https://instagram.com/instagram123")).toBeInTheDocument();
  expect(getByTestId("https://facebook.com/facebook123")).toBeInTheDocument();
  expect(getByTestId("https://twitter.com/twitter123")).toBeInTheDocument();
});
