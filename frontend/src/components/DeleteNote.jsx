import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNotesContext } from "../contexts/NotesContext";
import { deleteData } from "../utils/deleteData";

const DeleteNote = ({ id }) => {
  const { notes, setNotes } = useNotesContext();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteData(id)
      .then((data) => {
        const newList = notes.filter((note) => note._id !== data._id);
        setNotes(newList);
      })
      .catch((e) => console.error(e));
  };

  return (
    <button
      className="bg-purple-300 w-8 h-8 font-bold hover:bg-red-200"
      onClick={handleDelete}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default DeleteNote;
