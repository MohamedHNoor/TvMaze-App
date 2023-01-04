import involvementURL from './involvementURL.js';

const postLikes = async (id) => {
  await fetch(`${involvementURL}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ item_id: id })
  });
};

export default postLikes;
