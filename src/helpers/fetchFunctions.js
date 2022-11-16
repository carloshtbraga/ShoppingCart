export const fetchProduct = () => {
  // seu código aqui
};

const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';

export const fetchProductsList = async (para) => {
  try {
    if (!para) throw new Error('Termo de busca não informado');
    const um = await fetch(url + para);
    const dados = await um.json();
    return dados.results;
  } catch (error) {
    return error.message;
  }
};
