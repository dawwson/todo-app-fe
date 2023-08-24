import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ items }) => {
  return (
    <div className="TodoList">
      <h4>Todo List 💬</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {items.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
