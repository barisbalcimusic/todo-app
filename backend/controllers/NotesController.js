const getAllNotes = (req, res) => {
  res.json(db);
};

const createNote = (req, res) => {
  try {
    const post = req.body;
    db.push(post);
    res.json(db);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateNote = (req, res) => {
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
};

const deleteNote = (req, res) => {
  try {
    const id = req.params.id;
    db = db.filter((note) => Number(note.id) !== Number(id));
    res.json(db);
  } catch (error) {
    res.json({ message: error.message });
  }
};
