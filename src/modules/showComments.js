import involvementURL from './involvementURL.js';

const showComments = async (id) => {
  const response = await fetch(`${involvementURL}/comments?item_id=${id}`);
  const allComments = await response.json();
  return allComments;
};

export default showComments;
