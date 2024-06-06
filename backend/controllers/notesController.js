let db = [];

export const getAllNotes = (req, res, next) => {
  res.json(db);
};

export const createNote = (req, res, next) => {
  try {
    db.push(req.body);
    res.json(db);
  } catch (e) {
    res.json({ message: error.message });
  }
};

export const updateNote = (req, res, next) => {
  try {
    const id = req.params.id;
    if (db.find((note) => Number(note.id) === Number(id))) {
      const { title, content } = req.body;
      const filteredNote = db.find((note) => Number(note.id) === Number(id));
      Object.assign(filteredNote, { title, content });
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
      res.json(db);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (e) {
    next(e);
  }
};
