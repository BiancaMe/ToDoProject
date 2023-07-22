import {
  appendTask, addByOrder, editTaskOn, setIds, setIndex, getChecks,
} from './addRemove';

class ListTask {
    static loadList = () => {
      window.addEventListener('load', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const arr = JSON.parse(localStorage.getItem('list'));
        if (arr) {
          let i = 0;
          arr.forEach((element) => {
            appendTask(element.description, i, element.completed);
            i += 1;
          });
        }
      });
    }

    static initAddTaks = () => {
      document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const aux = document.querySelector('#add-item');
        addByOrder(aux.value);
        aux.value = '';
      });
    }

    static initEditTask = () => {
      document.addEventListener('DOMNodeInserted', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dots = document.getElementsByClassName('dots');
        editTaskOn(dots);
      });
    }

    static initCheckTask = () => {
      document.addEventListener('DOMNodeInserted', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const check = getChecks();
        for (let i = 0; i < check.length; i += 1) {
          check[i].addEventListener('change', (e) => {
            e.preventDefault();
            const arr = JSON.parse(localStorage.getItem('list'));
            if (e.target.checked) {
              arr[e.target.parentElement.id].completed = true;
            } else arr[e.target.parentElement.id].completed = false;
            localStorage.setItem('list', JSON.stringify(arr));
          });
        }
      });
    }

    static initClearAllCompleted = () => {
      document.querySelector('#clear').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const check = document.getElementsByClassName('check');
        const size = check.length;
        const arr = JSON.parse(localStorage.getItem('list'));
        const cleared = arr.filter((task) => !task.completed);
        for (let i = size - 1; i >= 0; i -= 1) {
          if (arr[i].completed) check[i].parentElement.remove();
        }
        localStorage.setItem('list', JSON.stringify(cleared));
        setIds();
        setIndex();
      });
    }
}

export default ListTask;