import React from "react";
import { TodoProps } from "../../types/types";
import { Todo } from "../Todo/Todo";

export const Todos: React.FC<TodoProps> = React.memo (({ todos }) => {
  console.log("rendering todos");
  return (
    <>
      <ul
        className="is-flex is-flex-direction-column"
        style={{ width: "50vw" }}
      >
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            isCompleted={todo.isCompleted}
          />
        ))}
      </ul>
    </>
  );
});
