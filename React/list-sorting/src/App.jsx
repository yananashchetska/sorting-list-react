import { useState } from "react";

import { GoodList } from "./components/GoodList";
import { Header } from "./components/Header";
import { SORT_FIELD } from "./components/constants";

import products from "./products.json";
import "./App.scss";

function prepareGoods(goods, { sortButton, query, reversed }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter((good) => good.name.includes(query));
  }

  if (sortButton) {
    preparedGoods.sort((product1, product2) => {
      switch (sortButton) {
        case SORT_FIELD.ID:
          return product1[sortButton] - product2[sortButton];

        case SORT_FIELD.NAME:
        case SORT_FIELD.COLOR:
          return product1[sortButton].localeCompare(product2[sortButton]);
        default:
          return 0;
      }
    });
  }

  if (reversed) {
    preparedGoods = preparedGoods.reverse();
  }
  return preparedGoods;
}

const App = () => {
  const [sortButton, setSortButton] = useState("");
  const [reversed, setReversed] = useState(false);

  // const handleButtonClick = (button) => {
  //   if (sortButton === button) {
  //     setReversed(!reversed);
  //   } else {
  //     setSortButton(button);
  //     setReversed(false);
  //   }
  // };

  let visibleProducts = prepareGoods(products, { sortButton, reversed });

  return (
    <div className="App">
      <Header
        sortButton={sortButton}
        sortBy={(field) => {
          setSortButton(field);
        }}
        reversed={reversed}
        setReversed={(field) => {
          setReversed(field);
        }}
      />
      <GoodList products={visibleProducts} />
    </div>
  );
};

export default App;
