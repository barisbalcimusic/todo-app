import { useState } from "react";
import DeleteNote from "./DeleteNote";
import UpdateNote from "./UpdateNote";
import { updateData } from "../utils/updateData";

const NoteItem = ({ id, title, content, notes }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(id, newTitle, newContent)
      .then((data) => {
        let note = notes.find((note) => note._id === id);
        note = { title: data.title, content: data.content };
        setEditMode(false);
      })
      .catch((e) => console.error(e));
  };

  return (
    <li className="w-full flex justify-center rounded-xl px-10 py-5  shadow-lg bg-blue-100">
      <form
        className="w-9/12 min-w-[270px] flex flex-col gap-2"
        onSubmit={handleSubmit}>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className={`w-full text-xl p-1 font-bold ${
            editMode ? "bg-white" : "bg-sky-200"
          }`}
          type="text"
          disabled={!editMode}
          maxLength="30"
        />
        <input
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
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
