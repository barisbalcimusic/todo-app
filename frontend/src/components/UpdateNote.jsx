import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const UpdateNote = ({ editMode, setEditMode }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  return (
    <button
      className={`${
        editMode ? "bg-green-300" : "bg-purple-300"
      } w-8 h-8 font-bold hover:bg-red-200`}
      onClick={editMode ? null : handleClick}
      type={editMode ? null : "submit"}
    >
      <FontAwesomeIcon icon={editMode ? faFloppyDisk : faPenToSquare} />
    </button>
  );
};

export default UpdateNote;
