/**
 * @jest-environment jsdom
 */

import addCommentCounter from '../modules/__mock__/addCommentCounter.js';

describe('addCommentCounter', () => {
  test('Should return the number of comments elements in the UI', () => {
    document.body.innerHTML = `<p class='comment_paragraph'</p>   
            <p class='comment_paragraph'</p> 
            <p class='comment_paragraph'</p>  
            <p class='comment_paragraph'</p>  
            <p class='comment_paragraph'</p> `;
    expect(addCommentCounter()).toBe(5);
  });

  test('Should return the number of comments elements in the UI', () => {
    document.body.innerHTML = "<p class='comment_paragraph'</p>";
    expect(addCommentCounter()).toBe(1);
  });
});
