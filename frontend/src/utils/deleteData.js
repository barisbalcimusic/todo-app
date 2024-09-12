export const deleteData = async (id) => {
  try {
    const res = await fetch(`https://betterdo.onrender.com/api/notes/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Fetch failed (deleteData)");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
