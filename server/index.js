import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
  res.json([
    { id: 1, text: "🧶 양말 뜨기 시작하기" },
    { id: 2, text: "🌿 브랜드 소개 페이지 다듬기" },
  ]);
});

app.get("/", (req, res) => {
    res.send("🧵 Welcome to SoHyung's TODO API!");
  });
  

app.listen(4000, () => {
  console.log("✅ Server running at http://localhost:4000");
});
