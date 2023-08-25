import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ items }) => {
  const [search, setSearch] = useState("");

  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? items
      : items.filter((item) =>
          // 대소문자 구문
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 💬</h4>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={handleOnChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
