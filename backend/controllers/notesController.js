import { log } from "console";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../db/db.json");

let db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

export const getAllNotes = (req, res, next) => {
  try {
    res.json(db);
  } catch (e) {
    next(e);
  }
};

export const createNote = (req, res, next) => {
  try {
    const post = { id: new Date().getTime(), ...req.body };
    db.push(post);
    fs.writeFileSync(dbPath, JSON.stringify(db), "utf8");
    res.json(db);
    console.log(db);
  } catch (e) {
    next(e);
  }
};

export const updateNote = (req, res, next) => {
  try {
    const id = req.params.id;
    if (db.find((note) => Number(note.id) === Number(id))) {
      const { title, content } = req.body;
      const filteredNote = db.find((note) => Number(note.id) === Number(id));
      Object.assign(filteredNote, { title, content });
      fs.writeFileSync(dbPath, JSON.stringify(db), "utf8");
      res.json(db);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (e) {
    next(e);
  }
};

export const deleteNote = (req, res, next) => {
  try {
    const id = req.params.id;
    if (db.find((note) => Number(note.id) === Number(id))) {
      db = db.filter((note) => Number(note.id) !== Number(id));
      fs.writeFileSync(dbPath, JSON.stringify(db), "utf8");
      res.json(db);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (e) {
    next(e);
  }
};
