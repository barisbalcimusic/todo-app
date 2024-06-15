export const errorHandler = (err, req, res, next) => {
  console.log("burada sikinti var");
  res.status(500).json({ message: err.message });
};
