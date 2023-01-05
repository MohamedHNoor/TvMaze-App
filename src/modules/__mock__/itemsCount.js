const itemsCounter = () => {
  const lists = document.querySelector('.lists');
  const displayNumber = lists.childElementCount;
  return displayNumber;
};

export default itemsCounter;
