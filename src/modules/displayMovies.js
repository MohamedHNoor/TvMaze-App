import likeIcon from '../assets/like.png';

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

export default displayMovies;
