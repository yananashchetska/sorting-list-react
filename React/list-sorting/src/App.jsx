import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import products from "./products.json";
import { GoodList } from "./components/GoodList/GoodList";
import { Button } from "./components/Button/Button";
// import { TRUE } from "sass";

const ID_BUTTON_NAME = "Id";
const NAME_BUTTON_NAME = "Name";
const COLOR_BUTTON_NAME = "Color";
const RESET_BUTTON_NAME = "Reset";

const App = () => {
  const [sortButton, setSortButton] = useState("");

  const visibleProducts = products.toSorted((product1, product2) => {
    switch (sortButton) {
      case ID_BUTTON_NAME:
        return product1.id - product2.id;
      case NAME_BUTTON_NAME:
        return product1.name.localeCompare(product2.name);
      case COLOR_BUTTON_NAME:
        return product1.color.localeCompare(product2.color);
      default:
        return 0;
    }
  });

  return (
    <div className="App">
      <h1>Goods</h1>
      <div className="filters container">
        <Button
          onClick={() => {
            setSortButton("");
          }}
          activity={sortButton === ""}
        >
          {RESET_BUTTON_NAME}
        </Button>

        {[ID_BUTTON_NAME, NAME_BUTTON_NAME, COLOR_BUTTON_NAME].map((button) => (
          <Button
            key={button}
            activity={button === sortButton}
            onClick={() => setSortButton(button)}
          >
            {button}
          </Button>
        ))}
      </div>

      <GoodList products={visibleProducts} />
    </div>
  );
};

export default App;
