import { useNotesContext } from "../contexts/NotesContext";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes } = useNotesContext();
  return (
    <ul className="w-4/12 min-w-[350px] flex flex-col gap-5">
      {notes &&
        notes.length > 0 &&
        notes.map((note) => (
          <NoteItem
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            notes={notes}
          />
        ))}
    </ul>
  );
};

export default NoteList;
