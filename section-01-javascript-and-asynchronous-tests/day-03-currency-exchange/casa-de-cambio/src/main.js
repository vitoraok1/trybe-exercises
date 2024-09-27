import './style.css';
import Swal from 'sweetalert2';

const textArea = document.getElementById('text-area');
const searchBtn = document.getElementById('search-btn');
const valuesBox = document.getElementById('values-box');
const coinTitle = document.getElementById('coin-title');

function fetchAPI(value) {
  const COINS_API = `https://api.exchangerate.host/latest?base=${value}`;
  return fetch(COINS_API)
  .then((response) => response.json())
  .then((data) => {
    if (data.base !== value.toUpperCase()) {
      throw new Error('Moeda inexistente!')
    }
    return data.rates;
  });
}

function addCoins(coins) {
  valuesBox.innerHTML = '';

  const coinsArray = Object.entries(coins);

  coinsArray.forEach((coin) => {
    const [coinName, value] = coin;
    
    const li = document.createElement('li');
    li.innerHTML = `${coinName} - ${value}`;
    valuesBox.appendChild(li);
  });
}

function handleSearch () {
  const coin = textArea.value.toUpperCase();

  if (!coin) {
    Swal.fire({
      icon: 'error',
      title: 'Opsss..',
      text: 'Você precisa digitar uma moeda'
    })
  } else {
    fetchAPI(coin)
    .then(addCoins)
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Opsss..',
        text: error.message
      });
    });
  };
  coinTitle.innerHTML = `Valores referentes a 1 ${coin}`;
}

searchBtn.addEventListener('click', handleSearch);