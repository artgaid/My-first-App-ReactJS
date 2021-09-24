import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCheck } from "../../actions/checkboxActions";

const Form = () => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const inputChangeCheck = (e) => {
    setCheck((prev) => (prev = e.target.checked));
    dispatch(changeCheck());

    console.log(check, e.target.id);
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          value={check}
          onChange={inputChangeCheck}
        />
        Checkbox
      </div>
    </>
  );
};

export default Form;
