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
    <div>
      <AddNote />
      <NoteList />
    </div>
  );
};

export default App;
