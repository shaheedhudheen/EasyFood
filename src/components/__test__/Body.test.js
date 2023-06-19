import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";

describe("Body", () => {
  test("Render Shimmer elements", () => {
    render(<Body />);

    let shimmer = screen.getByTestId('shimmer')
    console.log(shimmer);
    // screen.debug()
  });
});
