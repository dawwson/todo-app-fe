import "./TodoItem.css";

const TodoItem = (props) => {
  const { isDone, content, createdAt } = props;

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={() => {}} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{new Date(createdAt).toLocaleDateString()}</div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
