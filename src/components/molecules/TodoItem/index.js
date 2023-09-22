import "./style.css";

const TodoItem = (props) => {
  const { id, isDone, content, createdAt, onChangeCheckbox, onClickDelete } =
    props;

  const handleOnChangeCheckbox = () => {
    onChangeCheckbox(id);
  };

  const handleOnClickDelete = () => {
    onClickDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleOnChangeCheckbox}
        />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{new Date(createdAt).toLocaleDateString()}</div>
      <div className="btn_col">
        <button onClick={handleOnClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
