import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <p>My Messagers</p>
      <Link to="/chats">Chats</Link> | <Link to="/profile"> Profile </Link>
    </>
  );
}

export default Main;
