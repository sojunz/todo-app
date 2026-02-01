import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../TodoPage";

// ⭐ react-router-dom mock (setupTests.js에서도 적용됨)
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

// ⭐ fetch mock: TodoPage는 fetch 후에야 TodoForm을 렌더링함
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), // 빈 todo 리스트 반환
  })
);

describe("Todo Component Tests", () => {
  test("adds a new task", async () => {
    render(<Todo />);

    // ⭐ TodoForm이 렌더링될 때까지 기다림
    const input = await screen.findByPlaceholderText("Add a new task");

    fireEvent.change(input, {
      target: { value: "Buy milk" },
    });

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });
});
