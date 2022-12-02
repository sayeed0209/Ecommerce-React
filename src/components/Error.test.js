import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Error from "./Error";

test("show error", () => {
  render(<Error />);
  screen.getByText("Oppps! there was an error...");
});
