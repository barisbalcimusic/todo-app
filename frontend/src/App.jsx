import "./index.css";
import { useEffect } from "react";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import { useNotesContext } from "./contexts/NotesContext";
import { ClipLoader } from "react-spinners";

const App = () => {
  const { notes, setNotes } = useNotesContext(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/notes");
        const data = await res.json();
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen min-h-screen p-5 bg-purple-100 flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">BetterDo</h1>
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
