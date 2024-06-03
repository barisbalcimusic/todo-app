import DeleteNote from "./DeleteNote";
import UpdateNote from "./UpdateNote";

const NoteItem = ({ id, title, content }) => {
  const handleSubmit = () => {
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
        <input type="text" defaultValue={title} />
        <input type="text" defaultValue={content} />
        <DeleteNote id={id} />
        <UpdateNote id={id} title={title} content={content} />
      </form>
    </li>
  );
};

export default NoteItem;
