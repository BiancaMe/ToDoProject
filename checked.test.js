/**
* @jest-environment jsdom
*/

import {
  addByOrder, checkTask, getStorage,
} from './src/addRemove';

// Mock the enviroment for test Edit TasK function
document.body.innerHTML = '<div>'
  + '  <ul id="list"></ul>'
  + '</div>';

const mockTask = 'Feed Dogs';
addByOrder(mockTask);

const mockTask2 = 'Feed Cats';
addByOrder(mockTask2);

describe('Test for Check Status', () => {
  test('Check Status after check the Task with id :1, status have to be completed : true', () => {
    const li = document.getElementById('1');
    const input = li.querySelector('.check');
    // mock Checked the Task
    input.setAttribute('checked', 'checked');

    checkTask(input);
    const storage = getStorage();
    expect(storage[1].completed).toBeTruthy();
  });

  test('Check Status after check the Task with id :0, status have to be True', () => {
    const li = document.getElementById('0');
    const input = li.querySelector('.check');
    // mock Checked the Task
    input.setAttribute('checked', 'checked');

    checkTask(input);
    const storage = getStorage();
    expect(storage[0].completed).toBeTruthy();
  });

  test('Check Status after remove Checked of the Task with id :1, status have to be False', () => {
    const li = document.getElementById('1');
    const input = li.querySelector('.check');
    // mock Checked the Task
    input.removeAttribute('checked');

    checkTask(input);
    const storage = getStorage();
    expect(storage[1].completed).toBeFalsy();
  });
});
