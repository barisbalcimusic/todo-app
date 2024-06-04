import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const UpdateNote = ({ editMode, setEditMode }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  return !editMode ? (
    <button
      className="bg-purple-300 w-8 h-8 font-bold hover:bg-red-200"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  ) : (
    <button
      className="bg-green-300 w-8 h-8 font-bold hover:bg-red-200"
      type="submit"
    >
      <FontAwesomeIcon icon={faFloppyDisk} />
    </button>
  );
};

export default UpdateNote;
