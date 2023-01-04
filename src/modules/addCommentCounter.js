const addCommentCounter = () => {
  const commentItems = document.querySelectorAll('.comment_paragraph');
  const numberOfComments = commentItems.length;
  console.log(numberOfComments);
  return numberOfComments;
};

export default addCommentCounter;
