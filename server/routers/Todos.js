import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

// ✅ 전체 Todo 가져오기
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// ✅ 새 Todo 추가
router.post("/", async (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({ text });
  await newTodo.save();
  res.json(newTodo);
});

// ✅ Todo 완료 상태 업데이트
router.put("/:id", async (req, res) => {
  const { done } = req.body;
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { done },
    { new: true }
  );
  res.json(updated);
});

// ✅ Todo 삭제
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
