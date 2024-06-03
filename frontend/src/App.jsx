import express from "express";
import cors from "cors";

const app = express();

//GLOBAL MIDDLEWARES
app.use(cors());
app.use(express.json());

const port = 3000;

//SERVER
app.listen(port, () => {
  console.log("Server listening on port", port);
});
