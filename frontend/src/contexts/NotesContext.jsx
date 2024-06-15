import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(null);
  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
export const useNotesContext = () => useContext(NotesContext);
