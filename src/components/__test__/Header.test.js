import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header.js";
import { store } from "../../utils/store.js";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";


describe("Header", () => {
  test("Render Header Component", () => {
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    // screen.debug();
    expect(screen.getByText("Cart(0)")).toBeInTheDocument();

    const logo = screen.getByTestId('logo')
    
    expect(logo.src).toBe("http://localhost/mockImg.png");

  });
});
