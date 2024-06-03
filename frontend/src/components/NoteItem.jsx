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
      <form onSubmit={handleSubmit}>
        <input
          disabled={!editMode}
          className={
            editMode ? "border-solid border-2 border-black-500 p-2" : "re p-2"
          }
          type="text"
          defaultValue={title}
        />
        <input
          disabled={!editMode}
          className={
            editMode
              ? "border-solid border-2 border-black-500 p-2"
              : "disabled:bg-white p-2"
          }
          type="text"
          defaultValue={content}
        />
        <DeleteNote id={id} />
        <UpdateNote
          id={id}
          title={title}
          content={content}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </form>
    </li>
  );
};

export default NoteItem;
