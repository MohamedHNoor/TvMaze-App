/**
 * @jest-environment jsdom
 */

import itemsCounter from '../modules/__mock__/itemsCount.js';

describe('Number of movies on the UI', () => {
  test('Number of movies should be 0', () => {
    document.body.innerHTML = `
      <section class="lists"></section>
    `;
    expect(itemsCounter()).toBe(0);
  });

  test('Number of movies', () => {
    document.body.innerHTML = `
    <section class="lists">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </section>
    `;

    expect(itemsCounter()).toBe(7);
  });

  test('Number of movies', () => {
    document.body.innerHTML = `
    <section class="lists">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
  </section>
    `;

    expect(itemsCounter()).toBe(9);
  });
});
