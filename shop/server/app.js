const express = require("express");
const app = express();
const port = 3003;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "la_ma_shop",
});

// CATS
app.post("/admin/cats", (req, res) => {
  const sql = `
  INSERT INTO cats
  (title)
  VALUES (?)
  `;
  con.query(sql, [req.body.title], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'OK, new Cat was created', type: 'success' } });
  });
});


app.get("/admin/cats", (req, res) => {
  const sql = `
SELECT *
FROM cats
ORDER BY title
`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//delete
app.delete("/admin/cats/:id", (req, res) => {
  const sql = `
  DELETE FROM cats
WHERE id = ?
  `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'OK, Cat gone', type: 'success' } });
  });
});

//edit
app.put("/admin/cats/:id", (req, res) => {
  const sql = `
  UPDATE cats
  SET title = ? 
  WHERE id = ?
  `;
  con.query(sql, [req.body.title, req.params.id], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: 'OK, Cat updated', type: 'success' } });
  });
});

app.listen(port, () => {
  console.log(`Bebras klauso porto Nr ${port}`);
});