import express from "express";
import cors from "cors";

const app = express();

//GLOBAL MIDDLEWARES
app.use(cors());
app.use(express.json());

const port = 3000;

let db = [];

//ROUTERS
app.get("/api/notes", (req, res) => {
  res.json(db);
});

app.post("/api/notes", (req, res) => {
  try {
    const post = req.body;
    db.push(post);
    res.json(db);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.patch("/api/notes/:id", (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const filteredNote = db.find((note) => Number(note.id) === Number(id));
    if (title !== undefined) filteredNote.title = title;
    if (content !== undefined) filteredNote.content = content;
    res.json(db);
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.delete("/api/notes/:id", (req, res) => {
  try {
    const id = req.params.id;
    db = db.filter((note) => Number(note.id) !== Number(id));
    res.json(db);
  } catch (error) {
    res.json({ message: error.message });
  }
});

//SERVER
app.listen(port, () => {
  console.log("Server listening on port", port);
});
