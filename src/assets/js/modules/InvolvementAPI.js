
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';


export const createNewApp = () => {
  return fetch(`${involvementApi}/apps/`, {
    method: 'POST'
  })
    .then(response => response.text())
}

export const createlike = (app_id, item1) => {
  return fetch(`${involvementApi}/apps/${app_id}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id : item1 }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
    .then(res => res.json())
}

// export const postLike = async (endpoint, id) => {
//   let response;
//   try {
//     response = await fetch(endpoint, {
//       method: 'POST',
//       body: JSON.stringify({
//         item_id: id,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     return error.message;
//   }
//   return response.ok;
// };

export const getlikes = (app_id) => {
  return fetch(`${involvementApi}/apps/${app_id}/likes/`)
    .then(res => {
      // return res.json();
    })
}

export const createcomment = (app_id, item1, name, comment) => {
  return fetch(`${involvementApi}/apps/${app_id}/comments/`, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": item1,
      "username": name,
      "comment": comment
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
}

export const getcomments = (app_id, item1) => {
  return fetch(`${involvementApi}/apps/${app_id}/comments?item_id=${item1}/`)
    .then(res => res.json())
}