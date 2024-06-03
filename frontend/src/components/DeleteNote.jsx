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
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return <button onClick={handleDelete}>delete</button>;
};

export default DeleteNote;
