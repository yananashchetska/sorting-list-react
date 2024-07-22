import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import products from "./products.json";
import { GoodList } from "./components/GoodList/GoodList";
import { Button } from "./components/Button/Button";

const ID_BUTTON_NAME = "id";
const NAME_BUTTON_NAME = "name";
const COLOR_BUTTON_NAME = "color";
const RESET_BUTTON_NAME = "reset";

function prepareGoods(goods, { sortButton, query }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter(good => good.name.includes(query));
  }

  if (sortButton) {
    preparedGoods.sort((product1, product2) => {
      switch (sortButton) {
        case ID_BUTTON_NAME:
          return product1[sortButton] - product2[sortButton];
        
        case NAME_BUTTON_NAME:
        case COLOR_BUTTON_NAME:
          return product1[sortButton].localeCompare(product2[sortButton]);
        default:
          return 0;
      }
    });
  }
  
  return preparedGoods;
}
const App = () => {
  const [sortButton, setSortButton] = useState("");
  const visibleProducts = prepareGoods(products, {sortButton});


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
