import "./index.css";
import { useEffect } from "react";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import { useNotesContext } from "./contexts/NotesContext";

const App = () => {
  const { setNotes } = useNotesContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://todoapp-1-4n5p.onrender.com/api/notes"
        );
        const data = await res.json();
        setNotes(data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen min-h-screen p-5 bg-purple-100 flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold">ToDoApp</h1>
      <AddNote />
      <NoteList />
    </div>
  );
};

export default App;
