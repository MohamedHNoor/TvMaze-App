import showComments from './showComments.js';
import displayComments from './displayComments.js';
import involvementURL from './involvementURL.js';

const addNewComments = (id) => {
  const nameInput = document.querySelector('.username');
  const commentInput = document.querySelector('.comment');
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', async () => {
    if (!nameInput.value) {
      nameInput.setCustomValidity('Please enter your name');
      nameInput.reportValidity();
      setTimeout(() => {
        nameInput.setCustomValidity('');
      }, 1500);
      return;
    }
    if (!commentInput.value) {
      commentInput.setCustomValidity('Please enter your insights');
      commentInput.reportValidity();
      setTimeout(() => {
        commentInput.setCustomValidity('');
      }, 1500);
      return;
    }

    await fetch(`${involvementURL}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${Number(id)}`,
        username: nameInput.value,
        comment: commentInput.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    await showComments(id);
    displayComments(nameInput.value, commentInput.value);

    nameInput.value = '';
    commentInput.value = '';
  });
};

export default addNewComments;
