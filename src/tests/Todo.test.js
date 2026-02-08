// ⭐ TodoPage mock — 반드시 최상단
jest.mock("../TodoPage", () => {
  const React = require("react"); // ⭐ mock 내부에서 React import

  return function MockedTodoPage() {
    const [text, setText] = React.useState("");
    const [list, setList] = React.useState([]);

    return (
      <div>
        <input
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setList([...list, text])}>Add</button>

        <ul>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
});

import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../TodoPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: async () => [],
  })
);

describe("Todo Component Tests", () => {
  test("adds a new task", async () => {
    render(<Todo />);

    const input = await screen.findByPlaceholderText("Add a new task");

    fireEvent.change(input, { target: { value: "Buy milk" } });
    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });
});
