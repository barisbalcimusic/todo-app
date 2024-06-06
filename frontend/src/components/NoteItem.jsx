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
        const res = await fetch(
          `https://todoapp-1-4n5p.onrender.com/api/notes/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
              title: titleValue,
              content: contentValue,
            }),
          }
        );
        const data = await res.json();
        setNotes(data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <li className="w-full flex justify-center rounded-xl px-10 py-5  shadow-lg bg-blue-100">
      <form
        className="w-9/12 min-w-[270px] flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          value={titleValue}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full text-xl p-1 font-bold ${
            editMode ? "bg-white" : "bg-sky-200"
          }`}
          type="text"
          disabled={!editMode}
          maxLength="30"
        />
        <input
          value={contentValue}
          onChange={(e) => setContent(e.target.value)}
          className={`w-full p-1 bg-purple-200 ${
            editMode ? "bg-white" : "bg-sky-200"
          }`}
          type="text"
          disabled={!editMode}
          maxLength="30"
        />
        <div className="flex gap-1">
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
