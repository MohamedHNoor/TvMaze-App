import './style.css';
import Logo from './assets/logo.svg';
import likeIcon from './assets/like.png';

// const involvementID = 'JNsfgJQ37UBE16zOiirg';
const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JNsfgJQ37UBE16zOiirg';

// logo
const logo = new Image();
const brand = document.querySelector('.logo');
logo.src = Logo;
brand.appendChild(logo);

// display movies
const displayMovies = (movies) => {
  const lists = document.querySelector('.lists');
  lists.innerHTML = '';
  movies.forEach((movie, index) => {
    lists.innerHTML += `
    <div class="card">
      <div
        class="img"
        style="
              background: url('${movie.image.medium}');
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            "
      >
        <p class="summary">${movie.summary}</p>
      </div>
      <h3 class="title">${movie.name}</h3>
      <div class="likes">
        <img src="${likeIcon}" alt="" class="like-icon" id="${movie.id}" />
        <p class="like-count" id="${movie.id}">
          0
        </p>
        <p>Likes</p>
      </div>
      <button class="comment-button" data-id="${index + 1}">
        <span class="button-top">Comment</span>
      </button>
  </div>;
    `;
  });
};

// fetch data from API

const itemsCounter = () => {
  window.addEventListener('load', () => {
    const lists = document.querySelector('.lists');
    const displayNumber = lists.childElementCount;
    const NumberOfCounts = document.getElementById('count');
    NumberOfCounts.textContent = displayNumber;
  });
};

const movieLoaded = () => {
  itemsCounter();
};

const showsData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const movies = await response.json();
  const latestMovies = movies.slice(0, 12);
  displayMovies(latestMovies);
  modalHandler(latestMovies);
  movieLoaded();
};

// displayLikes function

const displayLikes = (data) => {
  data.forEach((item) => {
    const likeCount = document.querySelectorAll('.like-count');
    likeCount.forEach((display) => {
      if (display.id === item.item_id) {
        display.textContent = item.likes;
      }
    });
  });
};

const getLikes = async () => {
  await fetch(`${involvementURL}/likes`)
    .then((response) => response.json())
    .then((response) => displayLikes(response));
};

const postLikes = async (id) => {
  await fetch(`${involvementURL}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
};

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('like-icon')) {
    const itemId = event.target.id;
    postLikes(itemId);
    const likes = event.target.nextElementSibling;
    let numberOfLikes = Number(likes.textContent);
    numberOfLikes += 1;
    likes.textContent = String(numberOfLikes);
  }
});

getLikes();
showsData();


/////////////////////////////POPUP//////////////////////////////////////////

// Popup
const showComments = async (id) => {
  const response = await fetch(`${involvementURL}/comments?item_id=${id}`);
  const allComments = await response.json();
  return allComments;
};

// add comments counter
  const addCommentCounter = () => {
    const commentItems = document.querySelectorAll('.comment-paragraph');
    const numberOfComments = commentItems.length;
    return numberOfComments;
  };

// display comments
  const displayComments = (nameInput, commentInput) => {
    const commentSection = document.querySelector('.comment-section');
    const paragraphs = document.querySelectorAll('.comment-paragraph');
    const date = new Date().toISOString().slice(0, 10);
    if (!paragraphs.length) {
      document.querySelector(
        '.no_comment'
      ).innerHTML = `${date} ${nameInput}: "${commentInput}"`;
    } else {
      const paragraph = document.createElement('p');
      paragraph.classList.add('comment-paragraph');
      paragraph.textContent = `${date} ${nameInput}: "${commentInput}"`;
      commentSection.appendChild(paragraph);
    }
    const headings = document.querySelector('.comment-section');
    headings.firstElementChild.innerHTML = `comments (${addCommentCounter()})`;
  };

// add new comments
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
        item_id: `${+id}`,
        username: nameInput.value,
        comment: commentInput.value
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    await showComments(id);
    displayComments(nameInput.value, commentInput.value);
    nameInput.value = '';
    commentInput.value = '';
  });
};
const modal = document.querySelector('.modal');
// Add model handler
const modalHandler = (movies) => {
  const commentBtns = document.querySelectorAll('.comment-button');
  commentBtns.forEach(async (button) => {
    button.addEventListener('click', async () => {
      document.body.style.overflow = 'hidden';
      const mainButton = movies.find(
        (movie) => movie.id === +button.dataset.id
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
          <h2 class="comment-heading">
            (Comments (${comments.error ? 0 : comments.length})
          </h2>
          ${
            comments.error
              ? '<p class="no_comment"> No comment for this movie</p>'
              : `
          ${comments
            .map(
              (comment, idx) => `
            <p class='comment_paragraph' key=${idx}>${comment.creation_date} ${comment.username}: "${comment.comment}"</p>
          `
            )
            .join(' ')}
        `
          }
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