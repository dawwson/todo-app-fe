import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = (props) => {
  const { onCreate } = props;

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const handleOnChangeInput = (e) => {
    setContent(e.target.value);
  };

  const handleOnClickButton = () => {
    if (!content) {
      // 빈 입력값 방지 => 입력창에 포커스 주기
      return inputRef.current.focus();
    }
    onCreate(content);
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
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
