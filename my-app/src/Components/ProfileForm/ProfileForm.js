import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProfileItem } from "../../actions/profileListActions";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProfileItem(text));
    setText("");
  };
  const changeText = (e) => {
    setText((prev) => (prev = e.target.value));
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={text} onChange={changeText} type="text" />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
