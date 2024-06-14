export const deleteData = async (id) => {
  try {
    const res = await fetch(`https://betterdo.onrender.com/api/notes/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
