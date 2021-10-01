import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Link,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deletePohotoPexels } from "../../actions/pexelsAction";

const PexelsItem = ({ photo }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deletePohotoPexels(photo.id));
  };

  return (
    <ImageListItem key={photo.id}>
      <img src={photo.src.large} alt={photo.photographer} loading="lazy" />
      <ImageListItemBar
        title={
          <Link
            href={photo.photographer_url}
            underline="none"
            sx={{
              color: "rgba(255, 255, 255, 0.54)",
              ":hover": {
                color: "white",
              },
            }}
          >
            {photo.photographer}
          </Link>
        }
        actionIcon={
          <IconButton
            sx={{
              color: "rgba(255, 255, 255, 0.54)",
              ":hover": {
                color: "white",
              },
            }}
            onClick={() => deleteHandler(photo.id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default PexelsItem;
