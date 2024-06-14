export const getData = async () => {
  try {
    const res = await fetch("https://betterdo.onrender.com/api/notes");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
