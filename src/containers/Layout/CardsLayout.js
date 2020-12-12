import React from "react";
import CardItem from "./CardItem";

// const cards = items.map((item) => {
//   return (
//     <CardItem
//       img={item.img}
//       title={item.title}
//       year={item.title}
//       price={item.price}
//     />
//   );
// });

const CardsLayout = ({ items }) => (
  <>
    {items.map((item) => (
      <CardItem
        img={item.img}
        title={item.title}
        year={item.title}
        price={item.price}
      />
    ))}
  </>
);

export default CardsLayout;
