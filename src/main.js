import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const oi = await fetchProductsList('computador');

oi.forEach((ele) => {
  const um = createProductElement(ele);
  const dois = document.querySelector('.products');
  dois.appendChild(um);
});
