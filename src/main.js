import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

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
