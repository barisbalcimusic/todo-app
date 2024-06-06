import { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController";

const notesRouter = Router();

notesRouter.route("/").get(getAllNotes).post(createNote);
notesRouter.route("/:id").patch(updateNote).delete(deleteNote);
