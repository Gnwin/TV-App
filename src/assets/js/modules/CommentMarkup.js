const commentMarkup = (comment) => `<div class='comment'>${comment.date} ${comment.username} :${comment.insight}</div>`;

export default commentMarkup;