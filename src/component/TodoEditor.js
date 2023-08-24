import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = (props) => {
  const { onCreate } = props;

  const [content, setContent] = useState("");

  const handleOnChangeInput = (e) => {
    setContent(e.target.value);
  };

  const handleOnClickButton = () => {
    onCreate(content);
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className="editor_wrapper">
        <input
          placeholder="새로운 Todo..."
          value={content}
          onChange={handleOnChangeInput}
        />
        <button onClick={handleOnClickButton}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
