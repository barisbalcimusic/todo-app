export const updateData = async (id, newTitle, newContent) => {
  try {
    const res = await fetch(`https://betterdo.onrender.com/api/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        content: newContent,
      }),
    });
    if (!res.ok) throw new Error("Fetch failed (updateData)");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
