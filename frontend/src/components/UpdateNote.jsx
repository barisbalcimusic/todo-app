const UpdateNote = () => {
  const handleEdit = (e) => {
    e.preventDefault();
  };

  return <button onClick={handleEdit}>edit</button>;
};

export default UpdateNote;
