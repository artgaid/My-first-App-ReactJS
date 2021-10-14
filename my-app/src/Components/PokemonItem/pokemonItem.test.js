import { render, screen } from "@testing-library/react";
import PokemonItem from "./PokemonItem";
import { Provider } from "react-redux";
import store from "../../store/index";

const pokemon = {
  id: 0,
  sprites: { other: { dream_world: { front_default: "#" } } },
  name: "vova",
  stats: [],
};

describe("PokemonItem component", () => {
  it("PokemonItem render", () => {
    render(
      <Provider store={store}>
        <PokemonItem pokemon={pokemon} />
      </Provider>
    );

    expect(screen.getByText(/vova/i)).toBeInTheDocument();
    expect(document.querySelector("img")).toBeInTheDocument();
  });

  it("PokemonItem without pokemon", () => {
    render(
      <Provider store={store}>
        <PokemonItem />
      </Provider>
    );

    expect(screen.queryByRole("img")).toBeNull();
  });
});
