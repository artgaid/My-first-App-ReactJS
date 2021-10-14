import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import PokemonSearchForm from "./PokemonSearchForm";
import { Provider } from "react-redux";
import store from "../../store/index";

describe("PokemonSearchForm component", () => {
  it("PokemonSearchForm renders", () => {
    render(
      <Provider store={store}>
        <PokemonSearchForm />
      </Provider>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Input find works", () => {
    render(
      <Provider store={store}>
        <PokemonSearchForm />
      </Provider>
    );

    useEvent.type(screen.getByRole("textbox"), "pikachu");

    expect(
      screen.getByRole("textbox", { target: { value: "pikachu" } })
    ).toBeInTheDocument();
  });
});
