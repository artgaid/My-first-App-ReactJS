import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <p>My Messagers</p>
      <Link to="/chats">Chats</Link> |<Link to="/profile"> Profile </Link> |
      <Link to="/pokemons">Pokemons</Link>
    </>
  );
}

export default Main;
