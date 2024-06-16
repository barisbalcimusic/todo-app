import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { notesRouter } from "./routers/notesRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { connectToDb } from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT;
const url = process.env.DB_URL;

//CORS ip settings
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://betterdo.netlify.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

//ROUTES
app.use("/api/notes", notesRouter);

//ERROR HANDLER
app.use(errorHandler);

const startServer = async () => {
  try {
    //SERVER
    app.listen(port, () => {
      console.log("Server listening on port", port);
    });
  } catch (error) {
    console.log(error);
  }
};

//4 - Connect to DB, if success, start the server
connectToDb(url)
  .then(() => console.log("Connected to DB"))
  .then(() => startServer())
  .catch(() => console.log("Connection to DB failed"));
