import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNotesContext } from "../contexts/NotesContext";

const DeleteNote = ({ id }) => {
  const { setNotes } = useNotesContext();

  const handleDelete = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
          method: "DELETE",
        });
        const data = await res.json();
        setNotes(data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <button
      className="bg-purple-300 w-8 h-8 font-bold hover:bg-red-200"
      onClick={handleDelete}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default DeleteNote;
