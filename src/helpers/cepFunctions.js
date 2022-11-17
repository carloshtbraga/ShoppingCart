const cepButton = document.getElementById('cep');
const url = 'https://cep.awesomeapi.com.br/json/';
const url2 = 'https://brasilapi.com.br/api/cep/v2/';
const input = document.getElementById('input');
const adr = document.querySelector('.cart__address');

function erro() {
  adr.innerHTML = 'CEP não encontrado';
}

export const getAddress = () => {
  Promise.any([fetch(url + input.value),
    fetch(url2 + input.value)]).then((res) => res.json()).then((dois) => {
    adr.innerHTML = `${dois.address} - ${dois.district} - ${dois.city} - ${dois.state}`;
  });
};

export const searchCep = () => {
  if (input.value === '00000000') {
    erro();
  } if (input.value !== '00000000') getAddress();
};

cepButton.addEventListener('click', searchCep);
