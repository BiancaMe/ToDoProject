/**
* @jest-environment jsdom
*/

import {
  addByOrder, getStorage, setEdit,
} from './src/addRemove';

// Mock the enviroment for test Edit TasK function
document.body.innerHTML = '<div>'
+ '  <ul id="list"></ul>'
+ '</div>';

const mockTask = 'Feed Dogs';
addByOrder(mockTask);

const mockTask2 = 'Feed Cats';
addByOrder(mockTask2);

describe('Test Edit Task Function', () => {
  test('edit taks with id = 1', () => {
    const newDescription = 'Feed dogs and brush them';
    const li = document.getElementById('1');
    setEdit(li, newDescription);
    const descriptionDOM = li.querySelector('.itemText').innerHTML;
    const storage = getStorage();
    const descriptionStorage = storage[1].description;
    expect(descriptionStorage === newDescription && newDescription === descriptionDOM).toBeTruthy();
  });

  test('edit taks with id = 0', () => {
    const newDescription = 'Clean Room';
    const li = document.getElementById('0');
    setEdit(li, newDescription);
    const descriptionDOM = li.querySelector('.itemText').innerHTML;
    const storage = getStorage();
    const descriptionStorage = storage[0].description;
    expect(descriptionStorage === newDescription && newDescription === descriptionDOM).toBeTruthy();
  });
});
