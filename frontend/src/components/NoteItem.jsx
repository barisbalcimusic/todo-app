import { useState } from "react";
import DeleteNote from "./DeleteNote";
import UpdateNote from "./UpdateNote";
import { useNotesContext } from "../contexts/NotesContext";

const NoteItem = ({ id, title, content }) => {
  const [titleValue, setTitle] = useState(title);
  const [contentValue, setContent] = useState(content);
  const [editMode, setEditMode] = useState(false);
  const { setNotes } = useNotesContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            title: titleValue,
            content: contentValue,
          }),
        });
        const data = await res.json();
        console.log(data);
        setNotes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <li>
      <form className="p-2 flex items-center gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            value={titleValue}
            onChange={(e) => setTitle(e.target.value)}
            className={`p-2 font-bold  ${
              editMode ? "border-solid border-2 border-black-500" : ""
            }`}
            type="text"
            disabled={!editMode}
          />
          <input
            value={contentValue}
            onChange={(e) => setContent(e.target.value)}
            disabled={!editMode}
            className={`p-2 ${
              editMode ? "border-solid border-2 border-black-500" : ""
            }`}
            type="text"
          />
        </div>
        <div className="flex gap-2">
          <DeleteNote id={id} />
          <UpdateNote
            id={id}
            title={title}
            content={content}
            editMode={editMode}
            setEditMode={setEditMode}
          />
        </div>
      </form>
    </li>
  );
};

export default NoteItem;
