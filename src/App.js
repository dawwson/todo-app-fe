import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

const baseUrl = "http://localhost:8080/api/v1";

// TODO: 상태 코드에 따른 예외처리
function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos); // 나중에 삭제

  const fetchData = async () => {
    const res = await fetch(`${baseUrl}/todos`);
    const { data } = await res.json();
    setTodos([...data]);
  };

  const handleOnCreate = async (content) => {
    await fetch(`${baseUrl}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    await fetchData();
  };

  const handleOnChangeCheckbox = async (targetId) => {
    const todoToUpdate = todos.find((todo) => todo.id === targetId);
    await fetch(`${baseUrl}/todos/${targetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone: !todoToUpdate.isDone }),
    });
    await fetchData();
  };

  const handleOnDelete = async (targetId) => {
    await fetch(`${baseUrl}/todos/${targetId}`, {
      method: "DELETE",
    });
    await fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={handleOnCreate} />
      <TodoList
        items={todos}
        onChangeCheckbox={handleOnChangeCheckbox}
        onDelete={handleOnDelete}
      />
    </div>
  );
}

export default App;
