import { useEffect, useState } from "react";
import { useNotesContext } from "../contexts/NotesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { postData } from "../utils/postData";

const AddNote = () => {
  const { notes, setNotes } = useNotesContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      postData(title, content)
        .then((data) => {
          setNotes(notes ? (notes) => [...notes, data] : data);
          setSubmitted(false);
          setTitle("");
          setContent("");
        })
        .catch((e) => console.log(e));
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      className="w-4/12 min-w-[350px] flex flex-col items-center space-y-2 px-10 py-5 rounded-xl shadow-lg bg-blue-200"
      onSubmit={handleSubmit}
    >
      <div className="w-9/12 min-w-[270px] flex-1 flex-col items-center space-y-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
          className="w-full p-2"
          maxLength="30"
          required
        />
        <input
          onChange={(e) => setContent(e.target.value)}
          value={content}
          type="text"
          placeholder="note"
          className="w-full p-2"
          maxLength="30"
          required
        />
      </div>
      <button
        className="w-9/12 min-w-[270px]  bg-purple-300 p-2 hover:bg-red-200 font-bold"
        type="submit"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default AddNote;
