export function reduceProduct(productsCard) {
  const products = [];
  if (productsCard < 1) return [];
  const newProductsArray = productsCard.reduce((counter, obj) => {
    counter[obj.id] = (counter[obj.id] || 0) + 1;
    return counter;
  }, {});

  productsCard.forEach(product => {
    if (!products.find(cat => cat.id == product.id)) {
      products.push({
        ...product
      });
    }
  });

  const joinQuantityToProduct = products.map(resp => {
    resp.quantity = newProductsArray[resp.id];
    resp.added_at = new Date().getTime();
    return resp;
  });

  return joinQuantityToProduct;
}

export function removeProduct(productsCard, id) {
  const cleanArray = productsCard.filter(ele => ele.id !== id);
  const toRemove = productsCard.filter(ele => ele.id == id);
  toRemove.shift();
  const otro = cleanArray.concat(toRemove);
  otro.sort((a, b) => {
    return b.id - a.id;
  });
  return otro;
}
