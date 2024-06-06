import express from "express";
import cors from "cors";
import notesRouter from "./routers/notesRouter";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

let db = [];

//ROUTES
app.use("/api/notes", notesRouter);

//SERVER
app.listen(port, () => {
  console.log("Server listening on port", port);
});
