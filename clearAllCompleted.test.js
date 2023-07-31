/**
* @jest-environment jsdom
*/

import {
  addByOrder, checkTask, clearAllCompleted, getStorage,
} from './src/addRemove';

// Mock the enviroment for test Edit TasK function
document.body.innerHTML = '<div>'
    + '  <ul id="list"></ul>'
    + '</div>';

const mockTask = 'Feed Dogs';
addByOrder(mockTask);

const mockTask2 = 'Feed Cats';
addByOrder(mockTask2);

const mockTask3 = 'Feed Sheeps';
addByOrder(mockTask3);

const mockTask4 = 'Feed Cows';
addByOrder(mockTask4);

describe('Test for Clear all task Completed', () => {
  test('Test clear all comlpleted task', () => {
    // mock Checked Task 2 "Feed Cats"
    const li = document.getElementById('1');
    const input = li.querySelector('.check');
    input.setAttribute('checked', 'checked');
    checkTask(input);
    // mock Checked  Task 3 "Feed Sheeps"
    const li2 = document.getElementById('2');
    const input2 = li2.querySelector('.check');
    input2.setAttribute('checked', 'checked');
    checkTask(input2);
    clearAllCompleted();
    const list = getStorage();
    expect(list.find((elem) => elem.description === 'Feed Cats') === undefined && list.find((elem) => elem.description === 'Feed Sheeps') === undefined).toBeTruthy();
  });
});