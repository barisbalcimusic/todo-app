const UpdateNote = ({ editMode, setEditMode }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  return !editMode ? (
    <button className="bg-purple-300 p-2" onClick={handleClick}>
      edit
    </button>
  ) : (
    <button className="bg-purple-300 p-2" type="submit">
      save
    </button>
  );
};

export default UpdateNote;
