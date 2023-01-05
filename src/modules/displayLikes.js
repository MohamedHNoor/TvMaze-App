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

export default displayLikes;
