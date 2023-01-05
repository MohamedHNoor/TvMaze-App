import displayLikes from './displayLikes.js';
import involvementURL from './involvementURL.js';

const getLikes = async () => {
  await fetch(`${involvementURL}/likes`)
    .then((response) => response.json())
    .then((response) => displayLikes(response));
};

export default getLikes;
