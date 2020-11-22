import {useState} from 'react';

const getTopping = topping =>  topping.map(item => ({
    name: item,
    checked: false,
  }));

export const useToppings = (openItem) => {
  const [toppings, setToppings] = useState(getTopping(openItem.toppings));

  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      const newItem = {...item};
      if (i === index) {
        newItem.checked = !newItem.checked
      }
      return newItem;
    }))
  };
  return {toppings, checkToppings}
};
