import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

// TODO: 상태 코드에 따른 예외처리
function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(4);

  console.log(todos);

  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/todos");
    const jsonData = await res.json();
    setTodos(jsonData);
  };

  const handleOnCreate = async (content) => {
    const newTodo = {
      id: idRef.current,
      isDone: false,
      content,
      createdAt: new Date().getTime(),
    };
    // setTodos([...todos, newTodo]);
    await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    await fetchData();
    idRef.current += 1;
  };

  const handleOnChangeCheckbox = async (targetId) => {
    // const updatedTodo = todos.map((todo) => {
    //   if (todo.id === targetId) {
    //     return { ...todo, isDone: !todo.isDone };
    //   }
    //   return todo;
    // });
    // setTodos(updatedTodo);

    const todoToUpdate = todos.find((todo) => todo.id === targetId);
    await fetch(`http://localhost:4000/todos/${targetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone: !todoToUpdate.isDone }),
    });
    await fetchData();
  };

  const handleOnDelete = async (targetId) => {
    // const updatedTodo = todos.filter((todo) => todo.id !== targetId);
    // setTodos(updatedTodo);
    await fetch(`http://localhost:4000/todos/${targetId}`, {
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
