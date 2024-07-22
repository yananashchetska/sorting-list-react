/* eslint-disable react/prop-types */
import cn from "classnames";
import "./Header.scss";
import { SORT_FIELD } from "../constants";

export const Header = ({ sortButton, sortBy, reversed, setReversed }) => {
  const clickHandler = (button) => {
    if (button === sortButton) {
      setReversed(!reversed);
    } else {
      sortBy(button);
      setReversed(false);
    }
  };

  return (
    <div className="header">
      <div className="header__filters filters">
        {[SORT_FIELD.ID, SORT_FIELD.NAME, SORT_FIELD.COLOR].map((button) => (
          <button
            key={button}
            onClick={() => {
              clickHandler(button);
            }}
            className={cn(
              "filters__button button",
              {
                active: button === sortButton,
              },
              [button]
            )}
          >
            {button}
          </button>
        ))}
      </div>
      {sortButton !== "" && (
        <button
          className={`filters__button button ${SORT_FIELD.RESET}`}
          onClick={() => {
            sortBy("");
          }}
        >
          {SORT_FIELD.RESET}
        </button>
      )}
    </div>
  );
};
