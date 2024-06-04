import { useNotesContext } from "../contexts/NotesContext";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes, setNotes } = useNotesContext();
  return (
    <ul className="w-4/12 min-w-[350px] flex flex-col gap-5">
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
