import { render, screen } from "@testing-library/react";
import NotFound from "../components/NotFound";

test("renders notfound link", () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/404/i);
  expect(linkElement).toBeInTheDocument();
});
