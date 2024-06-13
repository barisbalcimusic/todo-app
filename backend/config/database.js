import mongoose from "mongoose";

export const connectToDb = async (url) => {
  try {
    return mongoose.connect(url);
  } catch (error) {
    console.log("Error connection to MongoDB:", error.message);
    process.exit(1);
  }
};
