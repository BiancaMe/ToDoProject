/**
 * @jest-environment jsdom
 */

import { addByOrder, getStorage, remove } from './src/addRemove';

document.body.innerHTML = '<div>'
+ '  <ul id="list"></ul>'
+ '</div>';

describe.only('Add new Task', () => {
  test('Test  Add new task "Feed Dogs" to LocalStore', () => {
    const mockTask = 'Feed Dogs';
    addByOrder(mockTask);
    const task = getStorage();
    expect(task[0].description).toBe(mockTask);
  });

  test('Test New task "Feed Dogs" add in DOM', () => {
    const li = document.getElementById('0');
    expect(li.id).toBe('0');
  });

  test('Test Add new task "Feed Cats" to LocalStore', () => {
    const mockTask2 = 'Feed Cats';
    addByOrder(mockTask2);
    const task2 = getStorage();
    expect(task2[1].description).toBe(mockTask2);
  });

  test('Test New task "Feed Cats" add in DOM', () => {
    const li = document.getElementById('1');
    expect(li.id).toBe('1');
  });

  test('Test Add new task emphy "" to LocalStore', () => {
    const mockTask3 = '';
    addByOrder(mockTask3);
    const task3 = getStorage();
    expect(task3[2].description).toBe(mockTask3);
  });

  test('Test New task Emphy "" add in DOM', () => {
    const li = document.getElementById('2');
    expect(li.id).toBe('2');
  });
});

describe.only('Remove Task', () => {
  test('Remove Task "Feed Cats" from Storage', () => {
    const li = document.getElementById('1');
    remove(li);
    const list = getStorage();
    expect(list.find((elem) => elem.description === 'Feed Cats')).toBe(undefined);
  });

  test('Remove Task "Feed Cats" from DOM', () => {
    const listDom = Array.from(document.querySelectorAll('itemList'));
    expect(listDom.find((elem) => elem.querySelector('.itemText').innerHTML === 'Feed Cats')).toBe(undefined);
  });

  test('Remove Task "Feed Dogs" from Storage', () => {
    const li = document.getElementById('0');
    remove(li);
    const list = getStorage();
    expect(list.find((elem) => elem.description === 'Feed Dogs')).toBe(undefined);
  });

  test('Remove Task "Feed Dogs" from DOM', () => {
    const listDom = Array.from(document.querySelectorAll('itemList'));
    expect(listDom.find((elem) => elem.querySelector('.itemText').innerHTML === 'Feed Dogs')).toBe(undefined);
  });
});
