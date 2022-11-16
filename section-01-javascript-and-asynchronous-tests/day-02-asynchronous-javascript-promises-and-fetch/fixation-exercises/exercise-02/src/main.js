import './style.css';
import Swal from 'sweetalert2';

const img = document.getElementById('image');
const name = document.getElementById('name');
const button = document.getElementById('sort-btn');

const ACC_TOKEN = '6228408843839106';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACC_TOKEN}`;

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
