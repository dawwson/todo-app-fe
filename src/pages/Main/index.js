import { useEffect, useState } from "react";
import "./style.css";
import Header from "../../component/Header";
import TodoEditor from "../../component/TodoEditor";
import TodoList from "../../component/TodoList";
import BasicModal from "../../component/organisms/BasicModal";

const baseUrl = "http://localhost:8080/api/v1";

// TODO: 상태 코드에 따른 예외처리
const MainPage = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  console.log(todos); // 나중에 삭제

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/todos`);

      const { code, data } = await response.json();

      if (code === 200) {
        return setTodos([...data]);
      }
    } catch (error) {
      setError(true);
    }
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

  if (error) {
    const title = "잠시 후 다시 확인해주세요!";
    const content =
      "🙇🙇🙇\n지금 이 서비스와 연결할 수 없습니다.\n" +
      "문제를 해결하기 위해 열심히 노력하고 있습니다.\n" +
      "잠시 후 다시 확인해주세요.";
    return <BasicModal title={title} content={content} />;
  }

  return (
    <div className="Home">
      <Header />
      <TodoEditor onCreate={handleOnCreate} />
      <TodoList
        items={todos}
        onChangeCheckbox={handleOnChangeCheckbox}
        onDelete={handleOnDelete}
      />
    </div>
  );
};

export default MainPage;
