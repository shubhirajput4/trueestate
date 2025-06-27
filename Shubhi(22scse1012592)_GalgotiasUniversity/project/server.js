import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// init database
const db = new sqlite3.Database("./db/neighborhoods.db");

// sample endpoint: get matching neighborhoods
app.post("/api/match", (req, res) => {
  const { lifestyle } = req.body;

  db.all(
    "SELECT * FROM neighborhoods WHERE lifestyle = ?",
    [lifestyle],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send("Database error");
      } else {
        res.json(rows);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
