import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { notesRouter } from "./routers/notesRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

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
