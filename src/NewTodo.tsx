import React, { useRef } from 'react';
import './App.css';

type NewTodoProps = {
  todoHandler: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ todoHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const entredText = textInputRef.current!.value;
    todoHandler(entredText);
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <input
        id="input-text"
        type="text"
        placeholder="write your todo item"
        ref={textInputRef}
      />
      <button className="btn" type="submit">
        ADD
      </button>
    </form>
  );
};

export default NewTodo;
