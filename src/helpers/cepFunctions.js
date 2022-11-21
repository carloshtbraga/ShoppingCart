const cepButton = document.getElementById('cep');
const url = 'https://cep.awesomeapi.com.br/json/';
const url2 = 'https://brasilapi.com.br/api/cep/v2/';
const input = document.getElementById('input');
const adr = document.querySelector('.cart__address');

function erro() {
  adr.innerHTML = 'CEP não encontrado';
}

export const getAddress = async () => {
  const um = url + input.value;
  const doiss = url2 + input.value;
  const retorno = await Promise.any([fetch(um), fetch(doiss)]);
  const dois = await retorno.json();
  const address = dois.address || dois.street;
  const district = dois.district || dois.neighborhood;
  adr.innerHTML = `${address} - ${district} - ${dois.city} - ${dois.state}`;
  if (dois.status) {
    erro();
  }
};

export const searchCep = () => {
  if (!Number(input.value)) {
    erro();
  } else getAddress();
};

cepButton.addEventListener('click', searchCep);
