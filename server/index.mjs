import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 4000;

// ✅ 미들웨어
app.use(cors());
app.use(express.json());

// ✅ MongoDB 연결 (계정/비밀번호 사용)
mongoose.connect("mongodb://sohyung:비밀번호@127.0.0.1:27017/todo-app?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Local MongoDB connected with user"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Todo 모델 정의
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model("Todo", todoSchema);

// ✅ 라우트
// 전체 Todo 가져오기
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// 새 Todo 추가
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

// Todo 완료 상태 업데이트
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

// Todo 삭제
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Todo not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

// ✅ 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
