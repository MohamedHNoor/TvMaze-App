import './style.css';
import Logo from './assets/logo.svg';
import postLikes from './modules/postLikes.js';
import getLikes from './modules/getLikes.js';
import showsData from './modules/showData.js';
// import displayMovies from './modules/displayMovies.js';

// const involvementID = 'JNsfgJQ37UBE16zOiirg';

// logo
const logo = new Image();
const brand = document.querySelector('.logo');
logo.src = Logo;
brand.appendChild(logo);

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
