/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "./GoodList.scss";

export const GoodList = ({ products }) => {
  return (
    <div className="list container">
      {products.map((product) => (
        <div 
          className="list__product product"
          key={product.id}
          style={{
            color: product.color
          }}
        >
          <div className="product__title">{product.name}</div>
        </div>
      ))}
    </div>
  );
};
