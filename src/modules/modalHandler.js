import showComments from './showComments.js';
import addNewComments from './addNewComments.js';
import addCommentCounter from './addCommentCounter.js';

const modal = document.querySelector('.modal');

const modalHandler = (movies) => {
  const commentBtns = document.querySelectorAll('.comment-button');
  commentBtns.forEach(async (button) => {
    button.addEventListener('click', async () => {
      document.body.style.overflow = 'hidden';
      const mainButton = movies.find(
        (movie) => movie.id === Number(button.dataset.id)
      );
      modal.classList.add('visible');
      const comments = await showComments(button.dataset.id);
      modal.innerHTML += `
      <div class="modal-container">
      <div class="modal-header">
        <div
          class="img"
          style="
            background: url('${mainButton.image.medium}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          "
        >
          <span>${mainButton.summary}</span>
        </div>
        <div>
          <h2 class="modal-title">${mainButton.name}</h2>
          <h4 class="modal-genres">${mainButton.genres}</h4>
          <form class="form">
            <h2 class="form-heading">Add a Comment</h2>
            <input
              id="pop-user"
              type="text"
              class="username"
              placeholder="Your Name..."
            />
            <input
            id="pop-comment"
              type="text"
              name="comment"
              class="comment"
              placeholder="Your Insights..."
            />
            <button type="button" class="submit-btn">
              <span class="button-top">Comment</span>
            </button>
          </form>
        </div>
      </div>
      <div class="close-icon">&times;</div>
      <div>
        <div class="comment-section">
        <h2 class='comment-heading'>Comments(${
          comments.error ? 0 : comments.length
        })<h2/>
        
        ${
          comments.error
            ? '<p class="no_comment"> No comment for this movie</p>'
            : ` ${comments
                .map(
                  (comment, idx) => `
              <p class='comment_paragraph' key=${idx}>${comment.creation_date} ${comment.username}: "${comment.comment}"</p>
            `
                )
                .join('')} `
        }
          </div>
        </div>
      </div>
    </div>
      `;

      document.querySelector('.close-icon').addEventListener('click', () => {
        modal.classList.remove('visible');
        modal.innerHTML = '';
        document.body.style.overflow = 'visible';
      });

      addNewComments(button.dataset.id);
      addCommentCounter();
    });
  });
};

export default modalHandler;
