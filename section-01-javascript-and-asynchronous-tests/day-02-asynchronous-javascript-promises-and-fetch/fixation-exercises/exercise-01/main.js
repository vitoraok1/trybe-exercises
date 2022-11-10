import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// Recuperar as informações das pessoas usuárias
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  })
// Carregar lista de posts da pessoa selecionada
usersSelect.addEventListener('change', () => {
  clearPageData();

  const POST_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;

  fetch(POST_API)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      // Passar o array com posts da pessoa selecionada como parâmetro para função fillPosts, que é responsável por imprimir eles na tela
      fillPosts(posts);

      const [featuredPost] = posts;
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

      return fetch(COMMENTS_API);
    })
    .then((response) => response.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    .catch((error) => {
      fillErrorMessage('Erro ao retornar as informações desse autor')
      console.log(error.message);
    });
});
