import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const dois = document.querySelector('.products');
const div = document.querySelector('#divs');

const funcaoCriaLoading = () => {
  const h1 = document.createElement('h1');
  h1.innerHTML = 'carregando...';
  h1.className = 'loading';
  div.appendChild(h1);
};

const funcaoDeletar = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const funcaoCriaElementos = async (para) => {
  try {
    funcaoCriaLoading();
    const oi = await fetchProductsList(para);
    oi.forEach((ele) => {
      dois.appendChild(createProductElement(ele));
    });
    funcaoDeletar();
  } catch (error) {
    const sunda = document.createElement('h1');
    sunda.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    sunda.className = 'error';
    div.appendChild(sunda);
  }
};

await funcaoCriaElementos('computador');

const botao = document.querySelectorAll('.product__add');
const olpai = document.querySelector('.cart__products');
botao.forEach((element) => element.addEventListener('click', async (event) => {
  const alvo = event.target.parentNode.firstChild.innerText;
  saveCartID(alvo);
  const primeiro = await fetchProduct(alvo);
  olpai.appendChild(createCartProductElement(primeiro));
}));

const ovo = () => {
  const hello = getSavedCartIDs()
    .forEach(async (ele) => {
      const oi = await fetchProduct(ele);
      await Promise.all([olpai.appendChild(createCartProductElement(oi))]);
    });
  return hello;
};
ovo();
