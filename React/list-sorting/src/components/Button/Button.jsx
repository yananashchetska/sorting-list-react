/* eslint-disable react/prop-types */
import "./Button.scss";
import cn from "classnames";

export const Button = ({ onClick, children, activity = false }) => {
  return (
    <button
      className={cn("button", { active: activity })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
