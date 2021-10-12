const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

// app.set();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev")); // мидлвап, который выводит все логи в консоль

const users = [
  { email: "admin@admin.ru", password: "123" },
  { email: "test@test.ru", password: "test" },
];

var test = [
  { name: "to", id: 0 },
  { name: "do", id: 1 },
  { name: "sho", id: 2 },
];

var chats = [];

// --- запросы на сервер ---
// app.get();
// app.post();
// app.put();
// app.patch();
// app.delete();

app.get("/", (req, res) => {
  console.log(req, res);
  res.send("hello servak");
});

app.get("/test", (req, res) => {
  res.json(test);
});

app.post("/test", (req, res) => {
  const newObj = req.body;
  test.push(newObj);
  res.json(test);
});

app.delete("/test", (req, res) => {
  const id = Number(req.query.id);
  const deleted = test.find((el) => el.id === id);
  if (deleted) {
    test = test.filter((el) => el.id !== id);
    res.status(200).json(chat);
  } else {
    res.status(404).json({ message: "What you are looking for doesn't exist" });
  }
});

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    users.forEach((el) => {
      if (el.email === email && el.password === password) {
        return res.json(el);
      }
    });
    res.sendStatus(400);
  }
  // console.log(req.body, "body");
  // console.log(req.headers, "headers");
  // console.log(req.method, "method");
});

app.get("/chats", (req, res) => {
  res.json(chats);
});

app.post("/chats", (req, res) => {
  const newObj = req.body;
  chats.push(newObj);
  res.json(newObj);
});

app.delete("/chats", (req, res) => {
  const id = Number(req.query.id);
  const deleted = chats.find((el) => el.id === id);
  if (deleted) {
    chats = chats.filter((el) => el.id !== id);
    return res.status(200).json();
  } else {
    return res
      .status(404)
      .json({ message: "Chat you are looking for doesn't exist" });
  }
});

app.post("/chats/messages/:id", (req, res) => {
  const { id } = req.params;
  const newMessage = req.body;
  chats.map((el) => {
    if (el.id === Number(id)) {
      el.messages.push(newMessage);
    }
    return el;
  });
  res.json(newMessage);
});

app.listen(3001, () => {
  console.log("servak start");
});
