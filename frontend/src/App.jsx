import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import NotesContextProvider from "./contexts/NotesContext";

const App = () => {
  const [notes, setNotes] = useState([]);

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
    <NotesContextProvider>
      <div className="container">
        <AddNote setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </NotesContextProvider>
  );
};

export default App;
