import express from "express";
import cors from "cors";
import { notesRouter } from "./routers/notesRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

//ROUTES
app.use("/api/notes", notesRouter);

//ERROR HANDLER
app.use(errorHandler);

//SERVER
app.listen(port, () => {
  console.log("Server listening on port", port);
});
