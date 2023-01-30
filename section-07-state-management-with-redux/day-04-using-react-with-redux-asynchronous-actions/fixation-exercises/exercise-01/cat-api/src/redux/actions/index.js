export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

const requestAPI = () => ({
  type: REQUEST_API,
});

const getPicture = (imgURL) => ({
  type: GET_PICTURE,
  payload: imgURL,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(data => dispatch(getPicture(data)))
  }
};
