import {
  appendTask, addByOrder, editTaskOn, clearCompleted,
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
            appendTask(element.description, i);
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

    static initClearAllCompleted = () => {
      document.querySelector('#clear').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearCompleted();
      });
    }
}

export default ListTask;