import { useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const mockData = [
  {
    id: 1,
    isDone: false,
    content: "포트폴리오 만들기",
    createdAt: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "블로그 글 쓰기",
    createdAt: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "Spring 강의 듣기",
    createdAt: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodo] = useState(mockData);
  const idRef = useRef(4);

  const handleOnCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdAt: new Date().getTime(),
    };

    setTodo([...todos, newItem]);
    idRef.current += 1;
  };

  const handleOnChangeCheckbox = (targetId) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === targetId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodo(updatedTodo);
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={handleOnCreate} />
      <TodoList items={todos} onChangeCheckbox={handleOnChangeCheckbox} />
    </div>
  );
}

export default App;
