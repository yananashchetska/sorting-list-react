import { TodoItem } from "../types/types";

export interface FormProps {
  addTodo: (todo: TodoItem) => void;
}

export interface SearchProps {
  filterTasks: (task: string) => void;
}
