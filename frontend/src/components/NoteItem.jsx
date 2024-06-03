import { useState } from "react";
import DeleteNote from "./DeleteNote";
import UpdateNote from "./UpdateNote";

const NoteItem = ({ id, title, content }) => {
  const [editMode, setEditMode] = useState(false);

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
            title: title,
            content: content,
          }),
        });
        const data = await res.json();
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
            disabled={!editMode}
            className={`p-2 font-bold  ${
              editMode ? "border-solid border-2 border-black-500" : ""
            }`}
            type="text"
            defaultValue={title}
          />
          <input
            disabled={!editMode}
            className={`p-2 ${
              editMode ? "border-solid border-2 border-black-500" : ""
            }`}
            type="text"
            defaultValue={content}
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
