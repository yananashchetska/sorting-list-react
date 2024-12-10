import React, { useState } from "react";
import classnames from "classnames";
import { TodoItem } from "../../types/types";
import { FormProps } from "../../interfaces/FormProps";
import './Form.css'



export const Form: React.FC<FormProps> = ({ addTodo }) => {
  const initialState = {
    title: "",
    description: "",
    isCompleted: false,
    errors: { title: false, description: false },
  };

  const [state, setState] = useState(initialState);

  const validateForm = () => {
    const titleError = !state.title.trim();
    const descriptionError = !state.description.trim();

    setState((prevState) => ({
      ...prevState,
      errors: { title: titleError, description: descriptionError },
    }));

    return !(titleError || descriptionError);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newTodo: TodoItem = {
      id: Date.now(),
      title: state.title,
      description: state.description,
      isCompleted: state.isCompleted,
    };

    addTodo(newTodo);
    reset();
  };

  function reset() {
    setState(initialState);
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
            "is-danger": state.errors.title,
          })}
          type="text"
          value={state.title}
          onChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              title: e.target.value,
              errors: { ...state.errors, title: false },
            }));
          }}
        />
        {state.errors.title && (
          <p style={{ color: "red" }}>You should enter a title</p>
        )}
      </div>
      <div className="input-control is-flex is-flex-direction-column">
        <label htmlFor="description-input">Description: </label>
        <textarea
          id="description-input"
          className={classnames("textarea", {
            "is-danger": state.errors.description,
          })}
          value={state.description}
          onChange={(e) => {
            setState((prevState) => ({
              ...prevState,
              description: e.target.value,
              errors: { ...state.errors, description: false },
            }));
          }}
        />

        {state.errors.description && (
          <p style={{ color: "red" }}>You shoul enter a description</p>
        )}
      </div>
      <div className="input-control is-flex is-justify-content-space-between">
        <label htmlFor="status-input">Is completed? </label>
        <input
          id="status-input"
          value=""
          type="checkbox"
          onChange={() =>
            setState((prevState) => ({
              ...prevState,
              isCompleted: !state.isCompleted,
            }))
          }
        />
      </div>
      <button type="submit" className="button is-link">
        Submit
      </button>
      <button type="reset" className="button">
        Reset
      </button>
    </form>
  );
};
