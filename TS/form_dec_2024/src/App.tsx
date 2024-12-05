import todos from "./data/todos.json";

import { Todos } from "./components/Todos/Todos";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./types/types";
import { useState } from "react";

function App() {
  const [allTodos, setAllTodos] = useState(todos);

  const addTodo = (newTodo: TodoItem) => {
    setAllTodos((prevTodos: TodoItem[]) => [newTodo, ...prevTodos]);
  };

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <h1 className="title is-size-1">Your todos:</h1>
      <Form addTodo={addTodo} />
      <Todos todos={allTodos} />
    </div>
  );
}

export default App;
