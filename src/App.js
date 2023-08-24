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
  const [todo, setTodo] = useState(mockData);
  const idRef = useRef(4);

  const handleOnCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdAt: new Date().getTime(),
    };

    setTodo([...todo, newItem]);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={handleOnCreate} />
      <TodoList />
    </div>
  );
}

export default App;
