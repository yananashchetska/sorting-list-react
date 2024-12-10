export type TodoItem = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

export type TodoProps = {
  todos: TodoItem[];
};

export type SearchBarItem = {
  query: string;
};
