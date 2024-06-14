export const deleteData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
