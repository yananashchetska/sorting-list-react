import { SearchProps } from "../../interfaces/FormProps";

export const SearchBar: React.FC<SearchProps> = ({ filterTasks }) => {
  const handleQuery = (ev: React.ChangeEvent<HTMLInputElement>) => {
    filterTasks(ev.target.value);
  };
  return (
    <input
      className="input"
      onChange={handleQuery}
    ></input>
  );
};
