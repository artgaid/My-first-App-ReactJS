const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

const users = [
  { email: "admin@admin.ru", password: "123" },
  { email: "test@test.ru", password: "test" },
];

// app.set();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev")); // мидлвап, который выводит все логи в консоль

// --- запросы на сервер ---
// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();

app.get("/", (req, res) => {
  console.log(req, res);
  res.send("hello");
});

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    users.forEach((el) => {
      if (el.email === email && el.password === password) {
        // return res.send(true);
        return res.json(el);
      }
    });
    res.sendStatus(400);
  }
  // console.log(req.body, "body");
  // console.log(req.headers, "headers");
  // console.log(req.method, "method");
});

app.listen(3001, () => {
  console.log("servak start");
});
