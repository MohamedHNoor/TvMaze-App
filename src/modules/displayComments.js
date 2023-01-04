import addCommentCounter from './addCommentCounter.js';

const displayComments = (nameInput, commentInput) => {
  const commentSection = document.querySelector('.comment-section');
  const paragraphs = document.querySelectorAll('.comment_paragraph');
  const date = new Date().toISOString().slice(0, 10);
  if (!paragraphs.length) {
    const noComment = document.querySelector('.no_comment');
    noComment.innerHTML = `${date} ${nameInput}: "${commentInput}"`;
  } else {
    const paragraph = document.createElement('p');
    paragraph.classList.add('comment_paragraph');
    paragraph.textContent = `${date} ${nameInput}: "${commentInput}"`;
    commentSection.appendChild(paragraph);
  }
  const headings = document.querySelector('.comment-heading');
  headings.firstElementChild.innerHTML += `Comments (${addCommentCounter()})`;
};

export default displayComments;
