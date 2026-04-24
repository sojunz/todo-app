import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import TodoPage from "./TodoPage.jsx";   // ✅ TodoPage import

// ✅ 라우터 설정
const router = createBrowserRouter([
  {
    path: "/",          // 기본 홈
    element: <App />
  },
  {
    path: "/todo",      // /todo 경로
    element: <TodoPage />
  }
]);

// ✅ 렌더링
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
