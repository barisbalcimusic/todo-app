import { useNotesContext } from "../contexts/NotesContext";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes, setNotes } = useNotesContext();
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          setNotes={setNotes}
        />
      ))}
    </ul>
  );
};

export default NoteList;
