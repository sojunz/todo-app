import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// ✅ MongoDB 연결 (계정/비밀번호 사용)
mongoose.connect("mongodb://sohyung:비밀번호@127.0.0.1:27017/todo-app?authSource=admin")
  .then(() => console.log("✅ Local MongoDB connected with user"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Todo 모델 정의
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const Todo = mongoose.model("Todo", todoSchema);

// ✅ 라우트
app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/api/todos", async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to save todo" });
  }
});

app.put("/api/todos/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { done: req.body.done },
    { new: true }
  );
  res.json(updated);
});

app.delete("/api/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
