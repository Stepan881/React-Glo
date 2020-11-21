export const convertToPrice = (price) => {
  return price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
};
