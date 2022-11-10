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

fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  })

usersSelect.addEventListener('change', () => {
  clearPageData();

  const POST_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;

  fetch(POST_API)
    .then((response) => response.json())
    .then((data) => {
      const { post } = data;
      fillPosts(post);
    });
});
