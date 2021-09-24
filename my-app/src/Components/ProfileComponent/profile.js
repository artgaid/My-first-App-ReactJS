import { useSelector, useDispatch } from "react-redux";
import { deleteProfileItem } from "../../actions/profileListActions";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProfileCheckbox from "../ProfileCheckbox/ProfileCheckbox";

function Profile() {
  const stateProfile = useSelector((state) => state);
  console.log(stateProfile);

  const dispatch = useDispatch();
  const handlerDelete = (text, id) => {
    console.log("delete", text);
    // dispatch({ type: "DELETE_PROFILE_ITEM", payload: id });
    dispatch(deleteProfileItem(id));
  };

  return (
    <>
      <p> My Profile </p>
      <ProfileForm />
      <div>
        {stateProfile?.profileList?.map((el) => (
          <div key={el.id}>
            <p>{el.name}</p>
            <button
              onClick={() => {
                handlerDelete(el.name, el.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <br />
      <ProfileCheckbox />
    </>
  );
}

export default Profile;
