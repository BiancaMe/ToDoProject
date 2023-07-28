export const appendTask = (text, size, check) => {
  const child = document.createElement('li');
  child.setAttribute('class', 'item itemList');
  child.setAttribute('id', size);
  let checked = '';
  if (check) checked = 'checked';
  child.innerHTML = `
  <input class='check' type='checkbox' ${checked}>
  <label class=" visible itemText"> ${text} </label>
  <input class="editText" type="text">
  <button class=" visible btn-dots">
      <span class="dots">&#8942;</span>
  </button> 
  <button class="btn-save" >Save</button>
  <button class="btn-close">
      <span class="close">&#215;</span>
  </button>`;
  if (document.getElementById('list')) { document.getElementById('list').appendChild(child); }
};

export const getStorage = () => JSON.parse(localStorage.getItem('list'));
const setStorage = (list) => localStorage.setItem('list', JSON.stringify(list));

export const addByOrder = (text) => {
  let size = 0;
  const newTask = {
    description: text,
    completed: false,
    index: 0,
  };
  const arr = getStorage();

  if (arr || null) {
    size = arr.length;
    newTask.index = size;
    arr.push(newTask);
    setStorage(arr);
  } else {
    const newArr = [];
    newArr.push(newTask);
    setStorage(newArr);
  }
  appendTask(text, size);
};

const displayRemoveEdit = (save, close, input, li) => {
  save.classList.add('visible');
  close.classList.add('visible');
  input.classList.add('visible');
  li.classList.add('editTask');
};

export const setEdit = (li, text) => {
  const id = li.getAttribute('id');
  const arr = getStorage();
  li.querySelector('.itemText').innerHTML = text;
  arr[id].description = text;
  localStorage.setItem('list', JSON.stringify(arr));
};

const saveEdit = (save, input, text, close, dots, li) => {
  save.addEventListener(('click'), (e) => {
    e.preventDefault();
    e.stopPropagation();
    input.classList.remove('visible');
    save.classList.remove('visible');
    close.classList.remove('visible');
    dots.classList.add('visible');
    text.classList.add('visible');
    li.classList.remove('editTask');
    setEdit(li, input.value);
  });
};

export const setIds = () => {
  const list = document.getElementsByClassName('itemList');
  for (let i = 0; i < list.length; i += 1) {
    list[i].setAttribute('id', i);
  }
};

export const setIndex = () => {
  const arr = getStorage();
  let i = 0;
  arr.forEach((element) => {
    element.index = i;
    i += 1;
  });
  localStorage.setItem('list', JSON.stringify(arr));
};

export const remove = (li) => {
  const arr = getStorage();
  arr.splice(li.id, 1);
  localStorage.setItem('list', JSON.stringify(arr));
  li.remove();
  setIds();
  setIndex();
};

export const removeOn = (close, li) => {
  close.addEventListener(('click'), (e) => {
    e.preventDefault();
    e.stopPropagation();
    remove(li);
  });
};

export const editTask = (e) => {
  const dots = e.target.parentNode;
  const text = e.target.parentElement.previousElementSibling.previousElementSibling;
  const input = e.target.parentElement.previousElementSibling;
  const save = e.target.parentElement.nextElementSibling;
  const close = e.target.parentElement.nextElementSibling.nextElementSibling;
  const li = e.target.parentElement.parentElement;
  dots.classList.remove('visible');
  text.classList.remove('visible');
  displayRemoveEdit(save, close, input, li);
  input.value = text.innerHTML;
  saveEdit(save, input, text, close, dots, li);
  removeOn(close, li);
};

export const editTaskOn = (dots) => {
  for (let i = 0; i < dots.length; i += 1) {
    dots.item(i).addEventListener('click', editTask);
  }
};

export const getChecks = () => {
  const check = document.getElementsByClassName('check');
  return check;
};

export const checkTask = (e) => {
  const arr = getStorage();
  if (e.checked) {
    arr[e.parentElement.id].completed = true;
  } else arr[e.parentElement.id].completed = false;
  localStorage.setItem('list', JSON.stringify(arr));
};

export const clearAllCompleted = () => {
  const listChecks = getChecks();
  const size = listChecks.length;
  const arr = getStorage();
  const cleared = arr.filter((task) => !task.completed);
  for (let i = size - 1; i >= 0; i -= 1) {
    if (arr[i].completed) listChecks[i].parentElement.remove();
  }
  localStorage.setItem('list', JSON.stringify(cleared));
  setIds();
  setIndex();
};