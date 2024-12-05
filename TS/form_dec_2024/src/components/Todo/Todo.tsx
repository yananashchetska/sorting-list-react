import React from "react";
import { TodoItem as TodoItemType } from "../../types/types";

export const Todo: React.FC<TodoItemType> = ({
  id,
  title,
  description,
  isCompleted,
}) => {
  return (
    <li key={id}
      className="box"
    >
      <h3 className="is-size-3">{title}</h3>
      <p>{description}</p>
      <p>Status: {isCompleted ? "Completed" : "Not Completed"}</p>
    </li>
  );
};
