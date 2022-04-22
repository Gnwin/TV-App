
const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';


const headers = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

export const createNewApp = () => {
  return fetch(`${involvementApi}/apps/`, {
    method: 'POST'
  })
    .then(response => response.text())
}

export const createlike = (app_id, item1) => {
  fetch(`${api}/${app_id}/likes`, {
    method: 'POST',
    body: JSON.stringify({ "item_id": item1 })
  })
    .then(res => res.json())
}

export const getlikes = (app_id) => {
  return fetch(`${api}/${app_id}/likes`)
    .then(res => res.json())
}

export const createcomment = (app_id, item1, name, comment) => {
  fetch(`${api}/${app_id}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": item1,
      "username": name,
      "comment": comment
    })
  })
    .then(res => res.json())
}

export const getcomments = (app_id, item1) => {
  return fetch(`${api}/${app_id}/comments?item_id=${item1}`)
    .then(res => res.json())
}

// export const search = (query, maxResults) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query, maxResults })
//   }).then(res => res.json())
//     .then(data => data.books)


// /apps/:app_id/likes/

// /apps/abc234/comments?item_id=item1