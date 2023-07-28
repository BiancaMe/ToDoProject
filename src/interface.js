import {
  appendTask, addByOrder, editTaskOn, getChecks, checkTask, clearAllCompleted,
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
            checkTask(e.target);
          });
        }
      });
    }

    static initClearAllCompleted = () => {
      document.querySelector('#clear').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearAllCompleted();
      });
    }
}

export default ListTask;