export const fetchProduct = () => {
  // seu código aqui
};

const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProductsList = async (para) => {
  const um = await fetch(url + para);
  const dados = await um.json();
  return dados.results;
};

console.log(fetchProductsList('computador'));
console.log('oi');
