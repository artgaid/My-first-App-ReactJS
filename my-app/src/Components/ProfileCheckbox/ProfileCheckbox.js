import { useDispatch, useSelector } from "react-redux";
import { changeCheck } from "../../actions/checkboxActions";

const Form = () => {
  const checkboxValue = useSelector((state) => state.profileReducer.checkbox);
  const dispatch = useDispatch();

  const inputChangeCheck = (e) => {
    dispatch(changeCheck());
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          value={checkboxValue}
          onChange={inputChangeCheck}
        />
        Test Checkbox
      </div>
    </>
  );
};

export default Form;
