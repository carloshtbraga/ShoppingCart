const url2 = 'https://api.mercadolibre.com/items/';
const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProduct = async (para) => {
  if (!para) throw new Error('ID não informado');
  const um = await fetch(url2 + para);
  const dados = await um.json();
  return dados;
};

export const fetchProductsList = async (para) => {
  if (!para) throw new Error('Termo de busca não informado');
  const um = await fetch(url + para);
  const dados = await um.json();
  return dados.results;
};
