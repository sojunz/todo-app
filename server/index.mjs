import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Todo from "./model/todoModel.js";

const app = express();
const PORT = 4000;

// 미들웨어
app.use(cors());
app.use(express.json());

// 전체 삭제 API
app.delete("/api/todos", async (req, res) => {
  try {
    await Todo.deleteMany({});
    res.json({ message: "All todos deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todos" });
  }
});

// MongoDB 연결
mongoose.connect("mongodb://sohyung:비밀번호@127.0.0.1:27017/todo-app?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Local MongoDB connected with user"))
  .catch(err => console.error("MongoDB connection error:", err));

// 라우트
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

app.post("/api/todos", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Text is required" });
    }
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to save todo" });
  }
});

app.put("/api/todos/:id", async (req, res) => {
  try {
    const { done } = req.body;
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { done },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Todo not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
