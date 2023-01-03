import './style.css';
import Logo from './assets/logo.svg';
import likeIcon from './assets/like.png';

// const involvementID = 'JNsfgJQ37UBE16zOiirg';
const involvementURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JNsfgJQ37UBE16zOiirg';

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

const showsData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const movies = await response.json();
  const latestMovies = movies.slice(0, 18);
  displayMovies(latestMovies);
  itemsCounter();
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ item_id: id })
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
// displayMovies();
