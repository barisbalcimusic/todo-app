import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { notesRouter } from "./routers/notesRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5174",
  "https://betterdo.onrender.com/api/notes",
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

dotenv.config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

//ROUTES
app.use("/api/notes", notesRouter);

//ERROR HANDLER
app.use(errorHandler);

//SERVER
app.listen(port, () => {
  console.log("Server listening on port", port);
});
