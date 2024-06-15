import "./index.css";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";
import { useNotesContext } from "./contexts/NotesContext";
import { getData } from "./utils/getData.js";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

const App = () => {
  const { notes, setNotes } = useNotesContext();

  useEffect(() => {
    getData().then((data) => setNotes(data));
  }, []);

  return (
    <div className="w-screen min-h-screen p-5 bg-purple-100 flex flex-col items-center gap-5">
      <h1 className="text-5xl tracking-widest text-purple-800 drop-shadow-lg">
        BetterDo
      </h1>
      <AddNote />
      {notes ? (
        <NoteList />
      ) : (
        <div>
          <ClipLoader color="green" size={80} />
          <p className="text-xl">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default App;
