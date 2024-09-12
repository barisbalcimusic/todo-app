export const getData = async () => {
  try {
    const res = await fetch("https://betterdo.onrender.com/api/notes");
    if (!res.ok) throw new Error("Fetch failed (getData)");
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
