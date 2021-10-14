import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";

describe("Main component", () => {
  it("Main render", () => {
    render(
      <Router>
        {" "}
        <Main />
      </Router>
    );

    expect(screen.getByText(/app/i)).toBeInTheDocument();
    expect(document.querySelector("a")).toBeInTheDocument();
  });

  it("Main snapshot", () => {
    const main = render(
      <Router>
        {" "}
        <Main />
      </Router>
    );

    expect(main).toMatchSnapshot();
  });
});
