import { Notes } from "../models/notesModel.js";

export const getAllNotes = async (req, res, next) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (e) {
    next(e);
  }
};

export const createNote = async (req, res, next) => {
  try {
    const note = await Notes.create(req.body);
    res.status(201).json(note);
  } catch (e) {
    next(e);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(note);
  } catch (e) {
    next(e);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(note);
  } catch (e) {
    next(e);
  }
};
