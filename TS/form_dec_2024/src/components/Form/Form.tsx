import React, { useState } from "react";
import { TodoItem } from "../../types/types";
import classnames from "classnames";

interface FormProps {
  addTodo: (todo: TodoItem) => void;
}

export const Form: React.FC<FormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsComplited] = useState(false);

  const [hasTitleError, setHasTitleError] = useState(false);
  const [hasDescriptionError, setHasDescriptionError] = useState(false);

  const validateForm = () => {
    const titleError = !title.trim();
    const descriptionError = !description.trim();
    

    setHasTitleError(titleError);
    setHasDescriptionError(descriptionError);
    
    return !(titleError || descriptionError);
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }
 

    const newTodo: TodoItem = {
      id: Date.now(),
      title,
      description,
      isCompleted,
    };

    addTodo(newTodo);
    reset();
  };

  function reset() {
    setTitle("");
    setHasTitleError(false);
    setHasDescriptionError(false);
    setDescription("");
    setIsComplited(false);
  }

  return (
    <form
      onSubmit={submitHandler}
      onReset={reset}
      id="todo-form"
      className="box is-flex is-flex-direction-column"
    >
      <div className="input-control is-flex is-flex-direction-column">
        <label htmlFor="title-input">Title: </label>
        <input
          id="title-input"
          className={classnames("input", {
            "is-danger": hasTitleError,
          })}
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setHasTitleError(false);
          }}
        />
        {hasTitleError && (
          <p style={{ color: "red" }}>You shoul enter a title</p>
        )}
      </div>
      <div className="input-control is-flex is-flex-direction-column">
        <label htmlFor="description-input">Description: </label>
        <textarea
          id="description-input"
          className={classnames("textarea", {
            "is-danger": hasDescriptionError,
          })}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
            setHasDescriptionError(false);
          }}
        />

        {hasDescriptionError && (
          <p style={{ color: "red" }}>You shoul enter a title</p>
        )}
      </div>
      <div className="input-control is-flex is-justify-content-space-between">
        <label htmlFor="status-input">Is completed? </label>
        <input
          id="status-input"
          // className="checkbox"
          value=""
          type="checkbox"
          onChange={() => setIsComplited(!isCompleted)}
        />
      </div>
      <button type="submit" className="button is-link">
        Submit
      </button>
      <button
        type="reset"
        className="button"
      >
        Reset
      </button>
    </form>
  );
};
