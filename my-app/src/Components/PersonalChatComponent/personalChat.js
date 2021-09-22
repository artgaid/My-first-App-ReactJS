import { useParams } from "react-router-dom";

const PersonalChat = () => {
  const { name } = useParams();

  return (
    <>
      <p> Your chat with {name} </p>
    </>
  );
};

export default PersonalChat;
